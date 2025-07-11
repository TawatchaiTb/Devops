FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV PORT=3000
EXPOSE ${PORT}
CMD ["npm", "start"]