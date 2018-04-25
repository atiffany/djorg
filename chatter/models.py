from uuid import uuid4
from django.contrib.auth.models import User
from django.db import models

class Chatter(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    toUser=models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name="toUser")
    content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    hasBeenRead = models.BooleanField(default=False)
    timeRead = models.DateTimeField(blank=True, auto_now=False)
    fromUser = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name="fromUser")
