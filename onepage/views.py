from django.shortcuts import render


def base(request):
    return render(request, 'www/base.html')


def index(request):

    if request.POST:
        miles = request.POST['miles']
        usercity = request.POST['city']

        test = "VIEW IS WORKING"

        context = {
            "miles": miles,
            "usercity": usercity,
            "test": test
        }

        print(miles)
        print(usercity)

        return render(request, 'www/index.html', context)

    else:
        return render(request, 'www/index.html')
