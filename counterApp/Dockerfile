FROM node:16.14.2

WORKDIR /app

ARG NODE_ENV=production
COPY ./package*.json ./
RUN npm install
COPY src/ ./src

CMD ["npm", "run", "serve"]