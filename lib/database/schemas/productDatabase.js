"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductDatabase = new mongoose_1.default.Schema({
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    designation: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});
exports.default = mongoose_1.default.model("ProductDatabase", ProductDatabase);
