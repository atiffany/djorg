import datetime
from django.db import models
from django.utils import timezone

class Bookmark(models.Model):
    bookmark_name = models.CharField(max_length=200)
    bookmark_url = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.bookmark_name
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

