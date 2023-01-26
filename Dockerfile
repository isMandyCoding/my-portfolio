# syntax=docker/dockerfile:1
FROM node:18-alpine as base

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
RUN npm ci
COPY . .
CMD [ "npm", "run", "test" ]

FROM base as build
RUN npm ci
COPY . .
RUN npm run build

FROM build as prod
WORKDIR /code
COPY --from=build /code/build /code/server.js ./
COPY --from=build /code/package*.json ./
RUN npm ci --production
EXPOSE 8080
CMD [ "node", "server.js" ]