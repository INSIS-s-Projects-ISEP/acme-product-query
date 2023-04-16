# FROM node:alpine As development

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install -g typescript

# RUN npm install --save-dev @types/mongoose @types/amqplib

# RUN npm install --save-dev @types/node



# COPY . .

# RUN npm run build

# FROM node:alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/app.js"]

FROM node

WORKDIR  /src/

COPY package.json ./

RUN npm install  -g npm@9.6.4

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]