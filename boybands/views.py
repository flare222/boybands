# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Boyband
from .serializers import BoybandSerializer

class BoybandListView(APIView):
  def get(self, _request):
    boybands = Boyband.objects.all()
    serialized_boybands = BoybandSerializer(boybands, many=True)
    return Response(serialized_boybands.data)

class BoybandDetailView(APIView):
  def get(self, request, pk):
      boyband = Boyband.objects.get(pk=pk)
      serialized_boyband = BoybandSerializer(boyband)
      return Response(serialized_boyband.data)

