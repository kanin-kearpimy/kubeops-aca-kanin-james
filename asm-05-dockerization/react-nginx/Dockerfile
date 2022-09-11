FROM node:18-alpine3.15 AS react
WORKDIR /react
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable
WORKDIR /frontend/
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=react /react/build/ /frontend/build/