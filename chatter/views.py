from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from .forms import ChatterForm
from .models import Chatter

def index(request):
    if request.method == 'POST':
        form = ChatterForm(request.POST)
        if form.is_valid():
            form.save()
    context = {
        'chatter': Chatter.objects.all(),
        'form': ChatterForm(),
    }
    return render(request, 'chatter/index.html', context)

def create(request):
    return HttpResponse("Working to create a new conversation.")
