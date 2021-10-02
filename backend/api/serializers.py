from rest_framework import serializers
from .models import Log


class LogSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Log
        fields = "__all__"
