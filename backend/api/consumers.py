import json
from channels.generic.websocket import AsyncWebsocketConsumer
from rest_framework.status import HTTP_401_UNAUTHORIZED
from rest_framework_simplejwt.serializers import TokenVerifySerializer
from django.contrib.auth.models import User
from channels.db import database_sync_to_async

class LogConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        """
        Handles connection logic. This implementation is too inefficient and should be
        revised in the future.
        """

        # # users might manually call this endpoint, reject unauthorized connections
        # if 'access-token' not in self.scope['cookies']:
        #     await self.close(code=HTTP_401_UNAUTHORIZED)
        #     return

        # # Use simplejwt's token verifier to check whether the given token has been expired or
        # # not
        # serializer = TokenVerifySerializer(
        #     data=self.scope['cookies']['access-token'])

        # # A token is not valid if it has been expired
        # if not serializer.is_valid():
        #     await self.close(code=HTTP_401_UNAUTHORIZED)
        #     return

        ####### Actual Connection Code #######

        self.document_id = self.scope['url_route']['kwargs']['document_id']
        self.user: User = self.scope['user']
        self.document_group = f"document_{self.document_id}"

        # Untracked usernames are by default subscribed,
        # boolean values within the dict indicates whether the current websocket is
        # subscribed or unsubscribed to the other user

        if 'tracked_usernames' not in self.scope['session']:
            self.scope['session']['tracked_usernames'] = {}
            self.save_session()

        # Add ourselves to the group
        await self.channel_layer.group_add(
            self.document_group,
            self.channel_name
        )

        # Accept the connection
        await self.accept()

    async def disconnect(self, close_code):

        try:
            await self.channel_layer.group_discard(
                self.document_group,
                self.channel_name
            )
        except:
            pass

    async def receive(self, text_data):
        """
        Receives data from websocket and handles logic on it.

        Note that this does not check for valid json
        """

        text_data_json = json.loads(text_data)

        if 'type' in text_data_json:
            if text_data_json['type'] == 'subscribe':
                # We don't care whether this suceeds or not
                self.scope['session']['tracked_usernames'][text_data_json['username']] = True
            elif text_data_json['type'] == 'unsubscribe':
                self.scope['session']['tracked_usernames'][text_data_json['username']] = False

            # Save the session
            self.save_session()
            return

        # If we reached here, then consumer prompted for 'send'
        await self.channel_layer.group_send(
            self.document_group,
            {
                'type': 'relay_log_contents',
                'log_contents': text_data_json['message'],
                'sender': self.user.username
            })

    async def relay_log_contents(self, event):
        if event['sender'] in self.scope['session']['tracked_usernames'] and self.scope['session']['tracked_usernames'][event['sender']] == False:
            return

        await self.send(text_data=json.dumps({'message': event['log_contents']}))

    @database_sync_to_async
    def save_session(self):
        self.scope['session'].save()
