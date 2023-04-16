# FROM node:19

# # Create app directory
# WORKDIR /

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install -g npm@9.6.4
# RUN npm install -g typescript

# # RUN npm run build

# # If you are building your code for production
# # RUN npm ci --omit=dev

# # Bundle app source
# COPY ./src .

# # RUN npm run build

# ENV NODE_ENV=production

# EXPOSE 3000
# CMD [ "node", "src/app.js" ]
# # CMD ["npm", "start"]  


FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/app.js"]