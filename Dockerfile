FROM node:18

COPY . .

EXPOSE 8080

CMD node ./dist/main.js