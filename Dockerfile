# Dependencies Cache and Compilation
FROM node:19-alpine as builder
WORKDIR /usr/src/product-query
COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src/
RUN npm install --save-dev typescript
RUN npm install -g npm@9.6.3
COPY src/app.ts ./
RUN npm run build

# Run
FROM node:19-alpine
WORKDIR /usr/app
COPY --from=builder /usr/src/product-query/dist /usr/app
COPY package.json ./
RUN npm install -g npm@9.6.3
USER node 
CMD ["npm", "run", "start"]
