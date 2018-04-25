from django.test import TestCase
from .models import Bookmark

class BookmarkTestCase(TestCase):
    def setUp(self):
        Bookmark.objects.create(bookmark_name="Noteless Bookmark",
                                bookmark_url="http://darthjarjar.com")
        Bookmark.objects.create(bookmark_name="Noted Bookmark",
                                bookmark_note="#sasquatchIsMyDad",
                                bookmark_url="http://homesliced.com")
    
    
    def test_retrieving_valid_bookmark(self):
        """Test that a stored bookmark has correct values."""
        noteless_bookmark = Bookmark.objects.get(bookmark_name="Noteless Bookmark")
        self.assertEqual(noteless_bookmark.bookmark_name, "Noteless Bookmark")
        self.assertEqual(noteless_bookmark.bookmark_url, "http://darthjarjar.com")
        self.assertEqual(noteless_bookmark.bookmark_note, "")
        noted_bookmark = Bookmark.objects.get(bookmark_name="Noted Bookmark")
        self.assertEqual(noted_bookmark.bookmark_name, "Noted Bookmark")
        self.assertEqual(noted_bookmark.bookmark_url, "http://homesliced.com")
        self.assertEqual(noted_bookmark.bookmark_note, "#sasquatchIsMyDad")

    def test_invalid_url(self):
        """Ensure db enforces validity/constraints on Bookmarks"""
        Bookmark.objects.create(bookmark_name="Bookmark No URL")
        Bookmark.objects.create(bookmark_name="Cotton Eyed Joe")