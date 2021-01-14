from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20,default="")
    password = models.CharField(max_length=20,default="")
    pwrepeat = models.CharField(max_length=20,default="")
    strong = models.BooleanField(default=True)


class Fruit(models.Model):
    name = models.CharField(max_length=20)
    price = models.CharField(max_length=20)
    description = models.CharField(max_length=100)

# Create your models here.
