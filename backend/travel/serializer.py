#Django-rest-framework
from rest_framework import serializers
from .models import Travel

#Primero creamos la clase que se va a serializar
#Segundo una subclase Meta que especifica los campos que se van a serializar
#Agregamos el modelo que vamos a usar
#Podemos usar fields='__all__' para que se serializen todos los campos
#O podemos especificar los campos que queremos serializar
#field('id','city','country','qualification','price','discount')
class TravelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Travel
        fields= '__all__'