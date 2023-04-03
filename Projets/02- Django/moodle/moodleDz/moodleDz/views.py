#un controleur (home)

from django.http import HttpResponse#package:django/http:module/HttpResponse:methode
from django.shortcuts import render

def home(request):
    return render(request, 'Pages/home.html')



#Retourne moi la page Pages/about.html
def about(request):
    return render(request,'Pages/about.html')

def contact(request):
    return render(request,'Pages/contact.html')

