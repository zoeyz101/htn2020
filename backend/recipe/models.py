from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=70, blank=False)
    aliases = models.CharField(max_length=70, blank=True)
    amount = models.FloatField()
    expiration = models.DateField()

    def __str__(self):
        return str(self.name)