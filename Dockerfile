FROM node:alpine As development

WORKDIR /src/app/dist 

COPY package*.json ./

RUN npm install -g typescript

RUN npm install --save-dev @types/mongoose @types/amqplib

RUN npm install --save-dev @types/node

RUN npm install -g npm@9.6.4



COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /src/app/dist 

COPY package*.json ./

# RUN npm install

COPY . .

COPY --from=development src/app/dist ./dist

CMD ["node", "dist/app.js"]

# FROM node

# WORKDIR  /src/

# COPY package.json ./

# RUN npm install  -g npm@9.6.4
# RUN npm install  -g express
# RUN npm install --save-exact @types/express

# RUN npm install --save-dev @types/mongoose @types/amqplib

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]