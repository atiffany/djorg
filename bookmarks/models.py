from uuid import uuid4
from django.db import models

class Bookmark(models.Model):
    bookmark_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    bookmark_name = models.CharField(max_length=200)
    bookmark_url = models.URLField('URL', unique=True)
    bookmark_note = models.TextField('Note', blank=True)

    def __str__(self):
        return self.bookmark_name
    def __get_url__(self):
        return self.bookmark_url
    def __get_note__(self):
        return self.bookmark_note