"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDTO = void 0;
var ProductDTO = /** @class */ (function () {
    function ProductDTO(sku, designation) {
        this.sku = sku;
        this.designation = designation;
    }
    ProductDTO.prototype.getSku = function () {
        return this.sku;
    };
    ProductDTO.prototype.setSku = function (sku) {
        this.sku = sku;
    };
    ProductDTO.prototype.getDesignation = function () {
        return this.designation;
    };
    ProductDTO.prototype.setDesignation = function (designation) {
        this.designation = designation;
    };
    return ProductDTO;
}());
exports.ProductDTO = ProductDTO;
