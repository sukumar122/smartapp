# Kubernetes Deployment

Apply in this order:

```bash
kubectl apply -f deploy/namespace.yaml
kubectl apply -f deploy/configmap.yaml
kubectl create secret generic postgres-secret --from-literal=... -n dataspace-dev
kubectl apply -f deploy/backend_deployment.yaml
kubectl apply -f deploy/backend_service.yaml
kubectl apply -f deploy/frontend_deployment.yaml
kubectl apply -f deploy/frontend_service.yaml
```
