FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install -g npm@9.6.3

COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@9.6.3

RUN docker run --name mongo-productquery -d -p 27017:27017 mongo


COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/products/main", "start"]