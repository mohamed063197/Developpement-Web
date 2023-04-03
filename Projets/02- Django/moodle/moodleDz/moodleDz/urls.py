"""moodleDz URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include, handler404
from . import views#depuis le package courant j'importe le module views


urlpatterns = [
    url(r'^$',views.home,name='home'),
    url(r'^admin/', admin.site.urls),
    #Quand j'ecrie 'premiere paramétre' dans la barre url retourn moi views.about
    url(r'^about/$',views.about, name='about'),
    url(r'^contact/$',views.contact, name='contact'),
    url('blog/', include('blog.urls')),#si j'ecrie Blog/ je me dirige vers les urls des blogs[divisé les urls, ne pas les mélanger]
]
