from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
import os
# Create your models here.


class Log(models.Model):
    title = models.CharField("Title", max_length=255)
    log_text = models.TextField("Log Text", default="")
    datetime = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    other_fields = models.JSONField(default=dict)
    perm_save = models.BooleanField(default=False)


class File(models.Model):

    def logfiles_dir_path(instance, filename):
        return f"{instance.log.pk}/{slugify(filename)}"

    log = models.ForeignKey(Log, related_name="files",
                            on_delete=models.CASCADE)
    file = models.FileField(upload_to=logfiles_dir_path)

    def __str__(self):
        return os.path.basename(self.file.name)
