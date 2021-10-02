from django.db.models import fields
from rest_framework import serializers
from rest_framework.response import Response
from .models import File, Log


class LogSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())
    files = serializers.StringRelatedField(many=True, required=False)

    class Meta:
        model = Log
        fields = "__all__"
        extra_kwargs = {
            "author": {"read_only": True},
            "datetime": {"read_only": True},
        }


class FileSerializer(serializers.ModelSerializer):

    class Meta:
        model = File
        fields = "__all__"
