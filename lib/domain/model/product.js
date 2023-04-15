"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productDTO_1 = require("../../dto/productDTO");
var Product = /** @class */ (function () {
    function Product(productId, sku, designation, description) {
        this.productId = productId;
        this.sku = sku;
        this.designation = designation;
        this.description = description;
    }
    // constructor(productId: number, sku: string);
    // constructor(productId: number, sku: string, designation: string, description: string);
    // constructor(sku: string);
    // constructor(sku: string, designation: string, description: string);
    Product.prototype.setSku = function (sku) {
        if (!sku || sku.trim().length === 0) {
            throw new Error("SKU is a mandatory attribute of Product.");
        }
        if (sku.length != 12) {
            throw new Error("SKU must be 12 characters long.");
        }
        this.sku = sku;
    };
    Product.prototype.setDesignation = function (designation) {
        if (!designation || designation.trim().length === 0) {
            throw new Error("Designation is a mandatory attribute of Product.");
        }
        if (designation.length > 50) {
            throw new Error("Designation must not be greater than 50 characters.");
        }
        this.designation = designation;
    };
    Product.prototype.setDescription = function (description) {
        if (!description || description.trim().length === 0) {
            throw new Error("Description is a mandatory attribute of Product.");
        }
        if (description.length > 1200) {
            throw new Error("Description must not be greater than 1200 characters.");
        }
        this.description = description;
    };
    Product.prototype.updateProduct = function (p) {
        this.setDesignation(p.designation);
        this.setDescription(p.description);
    };
    Product.prototype.createProd = function (p) {
        this.setSku(p.sku);
        this.setDesignation(p.designation);
        this.setDescription(p.description);
    };
    Product.prototype.toDto = function () {
        return new productDTO_1.ProductDTO(this.sku, this.designation);
    };
    Product.find = function () {
        throw new Error('Method not implemented.');
    };
    Product.findById = function (sku) {
        throw new Error('Method not implemented.');
    };
    return Product;
}());
exports.default = Product;
