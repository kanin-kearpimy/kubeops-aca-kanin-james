FROM node:14.20-alpine AS build
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install .
RUN npm run build

FROM node:14.20-alpine AS node
WORKDIR /app
COPY --from=build /app/dist/ .
CMD [ "node", "app.js" ]