RUN

1. Build image

```
docker build -t react-nginx .
```

2. Run container

```
docker run --name react-nginx-container -p 8080:80 react-nginx
```
