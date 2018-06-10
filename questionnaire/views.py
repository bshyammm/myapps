from django.http import HttpResponse

def index(request):
    return HttpResponse ("Questionnaire app")

def questionnaires(request):
    return HttpResponse("view to display all questionnaires, and to allow to create a new one")

def questions(request, questionnaire_id):
    return HttpResponse("view to display questions in a questionnaire %s.", %questionnaire_id)
