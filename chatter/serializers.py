from rest_framework import serializers
from .models import Chatter

class ChatterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatter
        fields=('id', 'toUser', 'content', 'fromUser')