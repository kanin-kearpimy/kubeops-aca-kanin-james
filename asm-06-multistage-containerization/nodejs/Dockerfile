FROM node:18-alpine3.15 AS build
WORKDIR /app
COPY package.json .
COPY src ./src
RUN npm install
RUN npm run build

FROM node:18-alpine3.15 AS node
WORKDIR /app
COPY package.json .
RUN npm install
COPY --from=build /app/dist/ .
CMD [ "npm", "start" ]