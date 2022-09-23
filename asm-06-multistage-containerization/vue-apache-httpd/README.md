RUN

1. Build image

```
docker build -t vue-apache-httpd .
```

2. Run container

```
docker run --name vue-apache-httpd-container -p 8080:80 vue-apache-httpd
```
