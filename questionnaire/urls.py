from django.urls import path
from . import views

urlpatterns = [
    path('', views.questionnaires, name='questionnaires'),
    path('<int:questionnaire_id>/', views.questions, name='questions'),
    path('create/', views.create_questionnaire, name='create_questionnaire'),
]
