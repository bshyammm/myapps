from django.http import HttpResponse
from django.shortcuts import render

from .models import Questionnaire, Question

def index(request):
    return HttpResponse ("Questionnaire app")

def questionnaires(request):
    questionnaire_list = Questionnaire.objects.order_by('name')
    context = {
        'questionnaire_list': questionnaire_list,
    }
    return render(request, 'questionnaire/index.html', context)

def questions(request, questionnaire_id):
    return HttpResponse("view for questionnaire %s." % questionnaire_id)

def create_questionnaire(request):
    return render(request, 'questionnaire/questionnaire.html')
