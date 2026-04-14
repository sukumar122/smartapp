from django.http import JsonResponse
from keycloak.exceptions import KeycloakInvalidTokenError

from config.keycloak import keycloak_openid


class KeycloakMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Skip authentication for public endpoints
        public_paths = ["/api/schema/", "/api/docs/", "/admin/"]
        if any(request.path.startswith(p) for p in public_paths):
            return self.get_response(request)

        auth_header = request.headers.get("Authorization", "")
        if not auth_header.startswith("Bearer "):
            return JsonResponse({"error": "Authorization header missing"}, status=401)

        token = auth_header.split(" ")[1]
        try:
            token_info = keycloak_openid.decode_token(token)
            request.user_info = token_info
        except KeycloakInvalidTokenError:
            return JsonResponse({"error": "Invalid or expired token"}, status=401)

        return self.get_response(request)
