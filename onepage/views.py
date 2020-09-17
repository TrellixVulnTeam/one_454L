from django.shortcuts import render


def base(request):
    return render(request, 'www/base.html')


def index(request):
    return render(request, 'www/index.html')
