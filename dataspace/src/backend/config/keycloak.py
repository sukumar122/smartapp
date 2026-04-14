from django.conf import settings
from keycloak import KeycloakOpenID

keycloak_openid = KeycloakOpenID(
    server_url=settings.KEYCLOAK_CONFIG["SERVER_URL"],
    client_id=settings.KEYCLOAK_CONFIG["CLIENT_ID"],
    realm_name=settings.KEYCLOAK_CONFIG["REALM"],
    client_secret_key=settings.KEYCLOAK_CONFIG["CLIENT_SECRET"],
)
