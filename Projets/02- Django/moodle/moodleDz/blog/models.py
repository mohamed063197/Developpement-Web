from django.db import models

#Classe Abstraite
class TimespamtedModel(models.Model):
    created_at=models.DateTimeField(auto_now_add=True)#sera modifié a l'ajout
    updated_at=models.DateTimeField(auto_now=True)#sera modifié a chaque modification

    class Meta:
        abstract = True


#Posts
class Post(TimespamtedModel):
    title = models.CharField(max_length=255)
    body= models.TextField()
    

    def __str__(self):
        return f'({self.title}, {self.body})'
    

class Category(TimespamtedModel):
    pass