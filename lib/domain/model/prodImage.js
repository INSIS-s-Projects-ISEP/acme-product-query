"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdImage = void 0;
var imageDTO_1 = require("../../dto/imageDTO");
// import { Resource } from '@nestjs/core'
var ProdImage = /** @class */ (function () {
    function ProdImage() {
    }
    // private image!: Resource;
    ProdImage.prototype.toDto = function () {
        return new imageDTO_1.ImageDTO(this.id, this.product.productId, this.service);
    };
    return ProdImage;
}());
exports.ProdImage = ProdImage;
