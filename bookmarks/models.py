import datetime
from django.db import models
from django.utils import timezone

class Bookmark(models.Model):
    bookmark_name = models.CharField(max_length=200)
    bookmark_url = models.URLField('URL', unique=True)
    bookmark_note = models.TextField('Note', blank=True)

    def __str__(self):
        return self.bookmark_name
    def __get_url__(self):
        return self.bookmark_url
    def __get_note__(self):
        return self.bookmark_note
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

