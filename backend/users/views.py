from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.parsers import JSONParser,ParseError
from users.models import User
import json

def register(request):  
    #print (request.data)
    ## print(JSONParser().parse(request)["username"])
    print (request.body)
    parse_result = JSONParser().parse(request)
    userdata = parse_result["username"]


    #print(JSONParser().parse(request)["password"])
    passworddata = parse_result["password"]

    # print(parse_result["pwrepeat"])
    pwrepeatdata = parse_result["pwrepeat"]

    # print("firsttttt")
    u = User(username=userdata,password=passworddata,pwrepeat=pwrepeatdata)
    #u = User(request.body)

    #u.save_database(userdata,passworddata,pwrepeatdata)
    print("seconddddd")
    u.save()
    return HttpResponse()

def login(request):  

    print ("i am in function login")
    parse_result = JSONParser().parse(request)
    userdata = parse_result["username"]

    passworddata = parse_result["password"]


    return HttpResponse()
# Create your views here.
