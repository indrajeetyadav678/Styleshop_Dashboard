from django.urls import path
from .views import generate_qr_code, authenticate_token

urlpatterns = [
    path('api/generate_qr_code/', generate_qr_code, name='generate_qr_code'),
    path('api/authenticate_token/', authenticate_token, name='authenticate_token'),
]
