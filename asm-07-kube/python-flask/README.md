RUN

1. Build image

```
docker build -t flask-image .
```

2. deploy container by k8s

```
kubectl apply -f k8s/deployment.yaml
```

3. check deployment and describe

```
kubectl get deploy
```

```
kubectl describe deploy flask
```