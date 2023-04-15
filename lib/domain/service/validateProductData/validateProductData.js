"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateProductData = /** @class */ (function () {
    function ValidateProductData() {
    }
    ValidateProductData.prototype.validate = function (sku, designation) {
        if (!sku || sku.trim().length === 0) {
            var errorMessage = "SKU field is required";
            return { success: false, message: errorMessage };
        }
        if (!sku || sku.trim().length !== 12) {
            var errorMessage = "SKU must be 12 characters";
            return { success: false, message: errorMessage };
        }
        if (!designation || designation.trim().length === 0) {
            var errorMessage = "Designation field is required";
            return { success: false, message: errorMessage };
        }
        return { success: true, message: "request Ok" };
    };
    return ValidateProductData;
}());
exports.default = ValidateProductData;
