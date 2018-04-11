from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Bookmark

def index(request):
    latest_bookmark_list = Bookmark.objects.all()
    template = loader.get_template('bookmarks/index.html')
    context = {
        'latest_bookmark_list': latest_bookmark_list,
    }
    return HttpResponse(template.render(context, request))

def create(request):
    return HttpResponse("Working to create a new bookmark.")
