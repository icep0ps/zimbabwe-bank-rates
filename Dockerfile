FROM node:21.6.0-alpine3.19

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm","run","dev" ]
