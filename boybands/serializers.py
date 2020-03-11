from rest_framework import serializers
from .models import Boyband

class BoybandSerializer(serializers.ModelSerializer):
  class Meta:
    model = Boyband
    fields = '__all__'

# class PopulatedBoybandSerializer(serializers.ModelSerializer):
