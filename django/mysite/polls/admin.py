from django.contrib import admin
from .models import Question
    
admin.site.register(Question)
# from . import models
# # Register your models here.
# admin.site.register(models.Question)
# admin.site.register(models.Choice)