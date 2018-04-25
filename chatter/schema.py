from graphene_django import DjangoObjectType
import graphene
from .models import Chatter as ChatterModel

class Chatter(DjangoObjectType):
    """Transform data into Graphene rep"""
    class Meta:
        model = ChatterModel
        interfaces = (graphene.relay.Node, )

class Query(graphene.ObjectType):
    """Exposes data results"""
    chatter = graphene.List(Chatter)

    def resolve_chatter(self, info):
        user = info.context.user
        if user.is_anonymous:
            return ChatterModel.objects.none()
        else:
            return ChatterModel.objects.filter(toUser=user)

schema = graphene.Schema(query=Query)