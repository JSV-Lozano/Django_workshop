from django.db import models


class Travel(models.Model):
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    qualification = models.DecimalField(
        max_digits=3, decimal_places=2, default=0)
    price = models.IntegerField(default=0, null=False, blank=False)
    discount = models.IntegerField(default=0, null=True, blank=True)
    image = models.ImageField(upload_to='travel_images/', null=True)

# Ver nombre de la ciudad en el administrador panel
    def __str__(self):
        return self.city
