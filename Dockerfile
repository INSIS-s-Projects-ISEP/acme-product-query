
FROM node:19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i
RUN npm install ts-node-dev --save-dev
RUN npm i --save-dev @types/node

COPY . .

EXPOSE 3000

CMD ["npm", "start"]