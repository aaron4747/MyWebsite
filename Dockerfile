FROM node:16.13

RUN apt-get update
RUN apt-get upgrade -y

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["node", "app.js"]
