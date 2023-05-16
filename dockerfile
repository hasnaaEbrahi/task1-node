FROM node:14-alpine
WORKDIR /app
COPY task/task1.js .
RUN npm install
COPY . .
EXPOSE 3000
CMD node task1.js