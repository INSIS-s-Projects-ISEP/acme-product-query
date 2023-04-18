const express = require('express');
const mongoose = require('mongoose');

import routes from "./routes/routes";
import RabbitMQConfig from "./config/rabbitMQConfig";
import { eurekaConfig } from '././config/eureka.config';

mongoose.connect('mongodb://mongo/productquery');

const app = express();
app.use(express.json());

app.use(routes);

const rabbitMQConfig = new RabbitMQConfig();
rabbitMQConfig.connect();

const client = eurekaConfig;
client.logger.level('debug');

app.listen(3000, () =>{
    console.log("Server is Listening");
})

client.start((error: any) => {
  if (error) {
    console.log('Error registering with Eureka:', error);
  } else {
    console.log('Registered with Eureka');
  }
});
