from django.db import models

# Create your models here.

class Question(models.Model):
    choices = {
        ('Multiple Choice', 'Multiple Choice'),
        ('Freetext', 'Freetext'),
    }
    question = models.CharField("Question Text", max_length=250)
    question_type = models.CharField("Question Type", max_length=250, choices = choices)
    position = models.IntegerField("Question Position", default=0)

    def __str__(self):
        return self.question

class Response(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    response = models.CharField("Response text", max_length=250)

    def __str__(self):
        return self.response
