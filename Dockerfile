FROM node:17.0.1-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
