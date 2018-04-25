from rest_framework import serializers
from .models import Bookmark

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ('bookmark_id', 'bookmark_name', 'bookmark_url', 'bookmark_note')