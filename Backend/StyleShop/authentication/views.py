from django.shortcuts import render
from django.http import JsonResponse
from django.utils.crypto import get_random_string
from django.views import View
import pyqrcode
import os

# Create your views here.
class Qrcodegenerator(View):
    def get(self, request, *args, **kwargs):
        response_data = self.generate_qr_code(request)
        return JsonResponse(response_data)

    def generate_qr_code(self, request):
        token = get_random_string(length=32)
        qr_code = pyqrcode.create(token)
        qr_code_dir = os.path.join('static', 'qr_codes')
        os.makedirs(qr_code_dir, exist_ok=True)
        qr_code_path = os.path.join(qr_code_dir, f"{token}.png")
        qr_code.png(qr_code_path, scale=8)

        # Save token in session or database
        request.session['login_token'] = token

        qr_code_url = f"/static/qr_codes/{token}.png"
        return {'qr_code_url': qr_code_url}


# =================================== ========================================

def authenticate_token(request):
    token = request.POST.get('token')
    session_token = request.session.get('login_token')

    if token == session_token:
        # Perform login actions
        return JsonResponse({'status': 'success', 'message': 'Login successful'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid token'})

