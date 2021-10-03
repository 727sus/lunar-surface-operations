from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/document/(?P<document_id>\w+)/$',
            consumers.LogConsumer.as_asgi(), name="log_websocket")
]
