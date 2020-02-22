from django.urls import path
from .views import BoybandDetailView

urlpatterns = [
  path('<int:pk>/', BoybandDetailView.as_view())
]