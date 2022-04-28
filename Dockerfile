FROM node:17-alpine

COPY . ./app
WORKDIR ./app

RUN npm install

EXPOSE 10001

CMD npm run start