from django import forms
from .models import Bookmark

class BookmarkForm(forms.ModelForm):
    
    class  Meta:
        model = Bookmark
        fields = ('bookmark_name', 'bookmark_url', 'bookmark_note')