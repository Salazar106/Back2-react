FROM node:lts-alpine
WORKDIR /app/App.js
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "App.js"]