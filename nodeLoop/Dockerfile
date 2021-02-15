FROM node:12.14.1

RUN mkdir /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
