from django.test import TestCase
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
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
        self.create_log_endpoint = reverse("create_log")

    def test_create_log(self):
        data = {
            "title": "Sample Title"
        }

        response = self.client.post(
            self.create_log_endpoint, data, format="json")

        print(response.data)

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
