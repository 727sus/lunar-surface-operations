from .models import Log
from .serializers import LogSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.


class CreateLogView(CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        '''if request.user.is_anonymous:
            return Response(status=status.HTTP_401_UNAUTHORIZED)'''

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
                data="Log does not exist",
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = LogSerializer(log, many=False)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
