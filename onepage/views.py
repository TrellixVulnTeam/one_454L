from django.shortcuts import render


def base(request):
    return render(request, 'www/base.html')


def index(request):

    if request.POST:
        miles = request.POST['miles']
        usercity = request.POST['city']

        context = {
            "miles": miles,
            "usercity": usercity
        }

        print(miles)
        print(usercity)

        return render(request, 'www/index.html', context)

    else:
        return render(request, 'www/index.html')
