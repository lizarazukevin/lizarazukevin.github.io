from django.shortcuts import render
from django.views import generic
from django.http import HttpResponse

# Create your views here.
class HomeView(generic.ListView):
    template_name = "home/home.html"

    def get_queryset(self):
        return HttpResponse()