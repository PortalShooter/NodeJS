FROM node:14.19.1

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY src/ ./src

CMD ['npm', 'run', 'start']