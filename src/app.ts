const express = require('express');
const mongoose = require('mongoose');

import routes from "./routes/routes";
import RabbitMQConfig from "./config/rabbitMQConfig";

mongoose.connect('mongodb://message-broker/productquery');

const app = express();

app.use(express.json());

app.use(routes);

const rabbitMQConfig = new RabbitMQConfig();
rabbitMQConfig.connect();

app.listen(3000, () =>{
    console.log("Server is Listening");
})