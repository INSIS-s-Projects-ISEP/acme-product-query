"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose_1 = require("mongoose");
var routes_1 = require("./routes/routes");
var rabbitMQConfig_1 = require("./config/rabbitMQConfig");
mongoose_1.default.connect('mongodb://127.0.0.1/productquery', {
    family: 4,
});
var app = express();
app.use(express.json());
app.use(routes_1.default);
var rabbitMQConfig = new rabbitMQConfig_1.default();
rabbitMQConfig.connect();
app.listen(3000, function () {
    console.log("Server is Listening");
});
