from django.test import TestCase
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from .models import Log
from rest_framework import status
from django.urls import reverse

# Create your tests here.


class LogModelTest(APITestCase):

    def setUp(self):
        self.test_user = User.objects.create_user(
            username="test-user",
            email="test@mail.com",
            password="test-password",
        )
        self.log = Log.objects.create(
            title="Sample Title",
            author=self.test_user
        )
        self.create_log_endpoint = reverse("create_log")
        self.register = reverse("rest_register")
        self.login = reverse("rest_login")

    def test_create_log_without_auth(self):
        data = {
            "title": "Sample Title"
        }
        response = self.client.post(
            self.create_log_endpoint, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_log_with_auth(self):
        data = {"username": "test-user",
                "email": "test@mail.com",
                "password": "test-password",
                }

        response = self.client.post(self.login, data)

        data = {
            "title": "Sample Title 2"
        }

        response = self.client.post(
            self.create_log_endpoint, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['title'], "Sample Title 2")

    def test_get_log_without_auth(self):
        view_log = reverse("log_view", kwargs={"log_id": "1"})

        response = self.client.get(view_log)

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_log_with_auth(self):
        view_log = reverse("log_view", kwargs={"log_id": "1"})

        data = {"username": "test-user",
                "email": "test@mail.com",
                "password": "test-password",
                }

        response = self.client.post(self.login, data)

        response = self.client.get(view_log)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], "Sample Title")

    def test_get_invalid_log_with_auth(self):
        view_log = reverse("log_view", kwargs={"log_id": "5"})

        data = {"username": "test-user",
                "email": "test@mail.com",
                "password": "test-password",
                }

        response = self.client.post(self.login, data)

        response = self.client.get(view_log)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
