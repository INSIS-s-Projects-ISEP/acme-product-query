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


#Create MongoDB Image for MongoDB Tutorial Application
FROM mongo
EXPOSE 27017
RUN docker build -t productmongo:0.1
RUN docker run --detach --name=jspmongo --publish 37017:27017 productmongo:0.1


COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/products/main", "start"]