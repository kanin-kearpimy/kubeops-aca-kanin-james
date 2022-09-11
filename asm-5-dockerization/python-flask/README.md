RUN

1. Build image

```
docker build -t python-flask .
```

2. Run container

```
docker run --name python-flask-container -p 8080:80 python-flask
```
