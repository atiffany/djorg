from django.conf import settings
from rest_framework import serializers, viewsets
from .models import Chatter

class ChatterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chatter
        fields('id', 'toUser', 'fromUser', 'content')
    def create(self, validated_data):
        user = self._context['request'].user
        chatter = Chatter.objects.create(fromUser = user, **validated_data)
        return chatter