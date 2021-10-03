"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from .views import (CreateLogView, LogView, UploadFileView,
                    DestroyFileView, ListLogView, )

urlpatterns = [
    path('create', CreateLogView.as_view(), name="create_log"),
    path('logs/<str:log_id>', LogView.as_view(), name="log_view"),
    path('logs/<str:log_id>/upload_file',
         UploadFileView.as_view(), name="upload_file"),
    path('logs/<str:log_id>/<str:filename>/destroy',
         DestroyFileView.as_view(), name="destroy_file"),
    path('home', ListLogView.as_view(), name="list_log")
]
