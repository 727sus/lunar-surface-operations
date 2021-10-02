from django.db.models import fields
from rest_framework import serializers
from rest_framework.response import Response
from .models import File, Log


class LogSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Log
        fields = "__all__"
        extra_kwargs = {
            "author": {"read_only": True},
            "datetime": {"read_only": True},
        }
