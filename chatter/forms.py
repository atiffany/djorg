from django import forms
from .models import Chatter

class ChatterForm(forms.ModelForm):
    
    class  Meta:
        model = Chatter
        fields = ('toUser', 'content', 'fromUser')