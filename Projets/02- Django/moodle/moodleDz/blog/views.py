from django.shortcuts import render, get_object_or_404
from django.http import Http404
from .models import Post  as ps


def index(request):
    return render(request, 'blog/index.html',{
        'posts':ps.objects.all()
    })

def show(request,id):
    post= get_object_or_404(ps, pk=id)
    #try:
    #   post=ps.objects.get(pk=id)
    #except ps.DoesNotExist:
    #    raise Http404(f'Sorry the post #{id} was not found')
    return  render(request,'blog/show.html',{
        'post':post
    })

