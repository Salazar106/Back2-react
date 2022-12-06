FROM node:lts-alpine
WORKDIR /contollers/index.js , App.js
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "App.js"]