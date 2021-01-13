from django.urls import path

from . import views

urlpatterns = [
            path('a', views.index, name='index'),
            path('b', views.b, name='index'),
            path('c', views.index, name='index'),
            path('d', views.index, name='index'),

]
