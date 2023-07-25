from rest_framework import viewsets
from .serializer import VacationplanSerializer
from .models import PlanVacations

# Create your views here.
class VacationplanViewSet(viewsets.ModelViewSet):
    queryset= PlanVacations.objects.all()
    serializer_class = VacationplanSerializer
