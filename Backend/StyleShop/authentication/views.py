from django.shortcuts import render
from django.http import JsonResponse
from django.utils.crypto import get_random_string
import pyqrcode

# Create your views here.

def generate_qr_code(request):
    token = get_random_string(length=32)
    qr_code = pyqrcode.create(token)
    qr_code_url = f"static/qr_codes/{token}.png"
    qr_code.png(qr_code_url, scale=8)
    
    # Save token in session or database
    request.session['login_token'] = token

    return JsonResponse({'qr_code_url': qr_code_url})


# =================================== ========================================

def authenticate_token(request):
    token = request.POST.get('token')
    session_token = request.session.get('login_token')

    if token == session_token:
        # Perform login actions
        return JsonResponse({'status': 'success', 'message': 'Login successful'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid token'})

