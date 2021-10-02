from django.http import response
import rest_framework
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import LogSerializer

# Create your views here.


class CreateLogView(CreateAPIView):

    def post(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

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
