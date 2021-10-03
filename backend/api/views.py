from os import stat
from rest_framework import permissions, serializers
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import LogSerializer, FileSerializer
from .models import Log, File
from rest_framework.parsers import FormParser, MultiPartParser, FileUploadParser
from rest_framework.viewsets import ModelViewSet
import json

# Create your views here.

invalid_user_error = {"error": "Invalid User"}
invalid_log_error = {"error": "Log does not exist"}


class CreateLogView(CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        if request.user.is_anonymous:
            return Response(data=invalid_user_error, status=status.HTTP_401_UNAUTHORIZED)

        serializer = LogSerializer(
            data=request.data,
            context={"request": request}
        )

        if serializer.is_valid():
            log = serializer.save()
            if log:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogView(RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        try:
            log = Log.objects.get(pk=kwargs["log_id"])
        except Log.DoesNotExist:
            return Response(
                data=invalid_log_error,
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = LogSerializer(log, many=False)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, *args, **kwargs):

        try:
            log = Log.objects.get(pk=kwargs["log_id"])
        except Log.DoesNotExist:
            return Response(
                data=invalid_log_error,
                status=status.HTTP_404_NOT_FOUND
            )

        if request.user != log.author:
            return Response(data=invalid_user_error,
                            status=status.HTTP_401_UNAUTHORIZED)

        serializer = LogSerializer(
            log,
            data=request.data,
            context={"request": request},
            partial=True
        )

        if serializer.is_valid():
            log = serializer.save()
            if log:
                json = serializer.data
                return Response(json, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        try:
            log = Log.objects.get(pk=kwargs["log_id"])
        except Log.DoesNotExist:
            return Response(
                data=invalid_log_error,
                status=status.HTTP_404_NOT_FOUND
            )

        if request.user != log.author:
            return Response(data=invalid_user_error, status=status.HTTP_401_UNAUTHORIZED)

        log.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class UploadFileView(CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):

        try:
            log = Log.objects.get(pk=kwargs["log_id"])
        except Log.DoesNotExist:
            return Response(
                data=invalid_log_error,
                status=status.HTTP_404_NOT_FOUND
            )

        if request.user != log.author:
            return Response(data=invalid_user_error, status=status.HTTP_401_UNAUTHORIZED)

        data = request.data
        data["file"] = request.FILES.get("file")
        serializer = FileSerializer(data=data)
        if serializer.is_valid():
            file = serializer.save()
            if file:
                json = serializer.data
                return Response(json, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
