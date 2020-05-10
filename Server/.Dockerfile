FROM node:10
WORKDIR /usr/src/app

COPY *.json ./
COPY . .

RUN npm install
RUN apt-get update
RUN apt-get install -y nodejs
RUN ln -s /usr/bin/nodejs /usr/bin/node

EXPOSE 8081
CMD node myfirstapi.js
