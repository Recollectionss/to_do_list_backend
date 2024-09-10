FROM node:20.14.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT=5012

EXPOSE 5012

CMD ["npm","run", "build"]

