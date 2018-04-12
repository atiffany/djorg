from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from .forms import BookmarkForm
from .models import Bookmark

def index(request):
    if request.method == 'POST':
        form = BookmarkForm(request.POST)
        if form.is_valid():
            form.save()
    context = {
        'bookmarks': Bookmark.objects.all(),
        'form': BookmarkForm(),
    }
    return render(request, 'bookmarks/index.html', context)

def create(request):
    return HttpResponse("Working to create a new bookmark.")
