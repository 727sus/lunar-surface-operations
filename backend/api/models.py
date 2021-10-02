from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Log(models.Model):
    title = models.CharField("Title", max_length=255)
    log_text = models.TextField("Log Text", default="")
    datetime = models.DateTimeField(auto_now_add=True)
    #author = models.ForeignKey(User, on_delete=models.CASCADE)
    other_fields = models.JSONField(default=dict)
    perm_save = models.BooleanField(default=False)


class File(models.Model):
    log = models.ForeignKey(Log, on_delete=models.CASCADE)
    file = models.FileField()
