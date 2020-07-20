from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Post(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    content = models.TextField()
    datetime = models.DateTimeField()
<<<<<<< HEAD
    likes = models.ManyToManyField(User)
=======
    likes = models.ManyToMany(User)
>>>>>>> 3f4c8cd4cb57164b3338ab91db57354547a01ee4
