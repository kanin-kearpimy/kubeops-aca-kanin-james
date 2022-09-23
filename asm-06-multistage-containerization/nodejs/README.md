RUN

1. Build image

```
docker build -t nodejs .
```

2. Run container

```
docker run --name nodejs-container -p 8080:80 nodejs
```
