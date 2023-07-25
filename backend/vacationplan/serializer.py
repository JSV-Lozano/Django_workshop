from rest_framework import serializers
from .models import PlanVacations

class VacationplanSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanVacations
        fields = '__all__'