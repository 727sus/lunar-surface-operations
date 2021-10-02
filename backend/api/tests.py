from django.core.files.uploadedfile import SimpleUploadedFile
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

    def test_update_log_with_auth(self):

        update_log = reverse("log_view", kwargs={"log_id": "1"})
        data = {"username": "test-user",
                "email": "test@mail.com",
                "password": "test-password",
                }

        self.client.post(self.login, data)

        data = {"log_text": "This is my current logging progress",
                "other_fields": {"Flight seat": 59, "Duration of current Mission": 360}
                }

        response = self.client.patch(update_log, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["log_text"],
                         "This is my current logging progress")
        self.assertDictEqual(response.data["other_fields"], {
                             "Flight seat": 59, "Duration of current Mission": 360})

    def test_update_log_without_auth(self):

        update_log = reverse("log_view", kwargs={"log_id": "1"})

        data = {"log_text": "This is my current logging progress as non auth",
                "other_fields": {"Flight days": 51, "Flight hours": 729}
                }

        response = self.client.patch(update_log, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        log = Log.objects.get(pk=1)
        self.assertNotEqual(
            log.log_text, "This is my current logging progress as non auth")

    def test_update_log_with_different_auth(self):
        User.objects.create_user(
            username="test-user-2",
            email="test-2@mail.com",
            password="test-password-2",
        )

        data = {"username": "test-user-2",
                "email": "test-2@mail.com",
                "password": "test-password-2",
                }

        self.client.post(self.login, data=data)

        update_log = reverse("log_view", kwargs={"log_id": "1"})

        data = {"log_text": "This is my current logging progress as non author",
                "other_fields":
                    {"Mission objective":
                     "The current mission is to pick up rocks from the Moon"}
                }

        response = self.client.patch(update_log, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        log = Log.objects.get(pk=1)
        self.assertNotEqual(
            log.log_text, "This is my current logging progress as non author")
