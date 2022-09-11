FROM node:18-alpine3.15 AS vue
WORKDIR /vue
COPY . .
RUN npm install
RUN npm run build

FROM httpd:2.4
WORKDIR /frontend/
COPY --from=vue /vue/dist/ /usr/local/apache2/htdocs/