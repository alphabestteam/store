from django.shortcuts import render
from django.http import HttpResponse
from . import serialzers

def index(request):
        user = serialzers.UserSerialzer(request.data)


        if user.is_valid():
                user.save()
                return HttpResponse(user)
        else:
                return HttpResponse(404)

def delete(request):
        user = objects.get.filter(username=request.data)
# Create your views here.
