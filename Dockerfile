FROM node:10

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production
RUN npm install pm2 -g

ENV NODE_ENV=production
ARG PRJ_ENV=staging
ENV PRJ_ENV="${PRJ_ENV}"
ARG PUBLIC_PATH=https://issf.s3.eu-central-1.amazonaws.com/razzle
ENV PUBLIC_PATH="${PUBLIC_PATH}"

COPY build/server.js /app/server.js
COPY build/assets.json /app/assets.json
COPY build/server.js.map /app/server.js.map
COPY build/public /app/public/

EXPOSE 3000
