from django.urls import path
from .views import BoybandDetailView, BoybandListView

urlpatterns = [
  path('game/', BoybandListView.as_view()),
  path('<int:pk>/', BoybandDetailView.as_view())
]