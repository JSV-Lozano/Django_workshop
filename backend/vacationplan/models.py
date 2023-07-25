from django.db import models


class PlanVacations(models.Model):
    city = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    qualification = models.DecimalField(
        max_digits=3, decimal_places=2, default=0)
    image = models.ImageField(upload_to='vacations_images/')
    flytime = models.IntegerField()

    def __str__(self):
        return str(self.city)
