from typing import Any
from django.db import models
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views import generic
from django.http import HttpResponse

from .models import Experience

# Landing/Home page here
class HomeView(generic.ListView):
    template_name = "home/home.html"

    def get_queryset(self):
        return HttpResponse("200")

# Career page here
class CareerView(generic.ListView):
    template_name = "home/career.html"
    context_object_name = "experience_list"

    def get_queryset(self):
        return Experience.objects.all()
    
# Resume page here
class ResumeView(generic.ListView):
    template_name = "home/resume.html"

    def get_queryset(self):
        return HttpResponse("200")
    
# Contact page here
class ContactView(generic.ListView):
    template_name = "home/contact.html"

    def get_queryset(self):
        return HttpResponse("200")