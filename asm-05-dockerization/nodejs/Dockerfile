FROM node:18-alpine3.15 AS react
WORKDIR /react
COPY . .
RUN npm install
CMD [ "node", "application.js" ]