from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Bookmark

def index(request):
    latest_bookmark_list = Bookmark.objects.order_by('-pub_date')[:5]
    template = loader.get_template('bookmarks/index.html')
    context = {
        'latest_bookmark_list': latest_bookmark_list,
    }
    return HttpResponse(template.render(context, request))
