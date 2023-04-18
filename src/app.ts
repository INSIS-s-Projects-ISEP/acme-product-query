const express = require('express');
const mongoose = require('mongoose');

import routes from "./routes/routes";
import RabbitMQConfig from "./config/rabbitMQConfig";

mongoose.connect('mongodb://mongo/productquery');


const app = express();

app.use(express.json());

app.use(routes);

const rabbitMQConfig = new RabbitMQConfig();
rabbitMQConfig.connect();

const Eureka = require('eureka-js-client').Eureka;

const os = require('os');
const instanceId = `${os.hostname()}:${process.env.PORT}`;


const client = new Eureka({
    instance: {
        app: 'product-query',
        instanceId,
        hostName: process.env.HOSTNAME,
        ipAddr: 'localhost',
        port: {
            '$': 3000,
            '@enabled': 'true'
        },
        vipAddress: 'my-service-product-query',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'product-query'
        }
    },
    eureka: {
        host: 'discovery-system',
        port: 8761,
        servicePath: '/eureka/apps/',
        fetchRegistry: true,
        registerWithEureka: true,
        useDns: false,
        preferIpAddress: true,
        defaultZone: 'http://discovery-system:8761/eureka'
    }
});

client.start((error: any) => {
    if (error) {
        console.log('Error starting Eureka client', error);
    } else {
        console.log('Eureka client started successfully');
    }
});

app.listen(3000, () =>{
    console.log("Server is Listening");
})