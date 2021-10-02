import json
from channels.generic.websocket import AsyncWebsocketConsumer
from rest_framework.status import HTTP_401_UNAUTHORIZED
from rest_framework_simplejwt.serializers import TokenVerifySerializer


class LogConsumer(AsyncWebsocketConsumer):
    async def connect(self):

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

        self.log_id = self.scope['url_route']['kwargs']['log_id']
        self.viewers_group_name = 'viewers@%s' % self.log_id

        # From AuthorAuthMiddleware, we now have a new scope of key 'author',
        # that returns a boolean value
        # Put viewers into a channel group 'viewers@<log_id:int>'
        await self.channel_layer.group_add(
            self.log_id,
            self.viewers_group_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['log_contents']

        # Only when the current consumer is the author then we broadcast
        if self.scope['author']:
            await self.channel_layer.group_send(
                self.viewers_group_name,
                {
                    'type': 'relay_log_contents',
                    'log_contents': message
                })

    async def relay_log_contents(self, event):
        await self.send(text_data=json.dumps({
            'log_contents': event['log_contents']
        }))
