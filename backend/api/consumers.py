import json
from channels.generic.websocket import AsyncWebsocketConsumer
from rest_framework.status import HTTP_401_UNAUTHORIZED
from rest_framework_simplejwt.serializers import TokenVerifySerializer
from django.contrib.auth.models import User


class LogConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        """
        Handles connection logic. This implementation is too inefficient and should be
        revised in the future.
        """

        # users might manually call this endpoint, reject unauthorized connections
        if 'access-token' not in self.scope['cookies']:
            await self.close(code=HTTP_401_UNAUTHORIZED)
            return

        # Use simplejwt's token verifier to check whether the given token has been expired or
        # not
        serializer = TokenVerifySerializer(
            data=self.scope['cookies']['access-token'])

        # A token is not valid if it has been expired
        if not serializer.is_valid():
            await self.close(code=HTTP_401_UNAUTHORIZED)
            return

        ####### Actual Connection Code #######

        self.document_id = self.scope['url_route']['kwargs']['document_id']
        self.user: User = self.scope['user']
        self.document_group = f"document_{self.document_id}"
        self.unsubscribed_usernames = []

        # Add ourselves to the group
        await self.channel_layer.group_add(
            self.document_group,
            self.channel_name
        )

        # Accept the connection
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        """
        Receives data from websocket and handles logic on it.

        Note that this does not check for valid json
        """

        text_data_json = json.loads(text_data)

        if 'type' in text_data_json:
            if text_data_json['type'] == 'subscribe':
                try:
                    # We don't care whether this suceeds or not
                    self.unsubscribed_usernames.remove(
                        text_data_json['username'])
                except:
                    pass
            elif text_data_json['type'] == 'unsubscribe':
                self.unsubscribed_usernames.append(text_data_json['username'])

            await self.send(text_data=json.dumps({
                'status': 200
            }))
            return

        # If we reached here, then consumer prompted for 'send'
        await self.channel_layer.group_send(
            self.document_group,
            {
                'type': 'relay_log_contents',
                'log_contents': text_data_json['message'],
                'blacklist': self.unsubscribed_usernames
            })

    async def relay_log_contents(self, event):

        if self.user.username not in event['blacklist']:
            await self.send(text_data=json.dumps({
                'message': event['log_contents']
            }))
