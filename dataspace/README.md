# Building Data Space

A secure, decentralized dataspace platform for Finnish building owners to share building data while maintaining control and sovereignty.

## Tech Stack
- Frontend: React 18, Material-UI
- Backend: Django 4.2, Django REST Framework
- Auth: Keycloak 23
- Database: PostgreSQL 15
- Infrastructure: Docker, Kubernetes

## Getting Started

1. Copy the environment file:

```bash
cp .env.example .env
```   
2. Edit .env and fill in required values. 

3. Start the project:
```bash
docker-compose up -d
```

4. Access services:

- Django API: http://localhost:8000

- Keycloak: http://localhost:8080

