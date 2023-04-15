"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailDTO = void 0;
var ProductDetailDTO = /** @class */ (function () {
    function ProductDetailDTO(sku, designation, description) {
        this.sku = sku;
        this.designation = designation;
        this.description = description;
    }
    ProductDetailDTO.prototype.getSku = function () {
        return this.sku;
    };
    ProductDetailDTO.prototype.setSku = function (sku) {
        this.sku = sku;
    };
    ProductDetailDTO.prototype.getDesignation = function () {
        return this.designation;
    };
    ProductDetailDTO.prototype.setDesignation = function (designation) {
        this.designation = designation;
    };
    ProductDetailDTO.prototype.getDescription = function () {
        return this.description;
    };
    ProductDetailDTO.prototype.setDescription = function (description) {
        this.description = description;
    };
    return ProductDetailDTO;
}());
exports.ProductDetailDTO = ProductDetailDTO;
