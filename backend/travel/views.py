from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TravelSerializer
from .models import Travel

# Create your views here.
class TravelView(viewsets.ModelViewSet):
    serializer_class = TravelSerializer
    queryset = Travel.objects.all()
