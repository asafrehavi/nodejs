FROM node:12-alpine3.14
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
CMD node index.js
EXPOSE 4000