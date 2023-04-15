"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var productService_1 = require("../../domain/service/productService");
var productDatabase_1 = require("../../database/schemas/productDatabase");
var validateProductData_1 = require("../../domain/service/validateProductData/validateProductData");
var productService = new productService_1.default();
var valid = new validateProductData_1.default();
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.findAllProducts = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var products, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productService.findAllProducts()];
                    case 1:
                        products = _a.sent();
                        response.status(200).send(products);
                        if (products) {
                            return [2 /*return*/, response.status(200).json(products)];
                        }
                        else {
                            return [2 /*return*/, response.status(404).json({ message: "Not found product" })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                error: "Make sure all required fields are filled in correctly and try again.",
                                message: error_1
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.findProductBySku = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var sku, product, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sku = request.params.sku;
                        return [4 /*yield*/, productService.getProductBySku(sku)];
                    case 1:
                        product = _a.sent();
                        if (product) {
                            return [2 /*return*/, response.status(200).json(product)];
                        }
                        else {
                            return [2 /*return*/, response.status(404).json({ message: "Product with SKU ".concat(sku, " not found") })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                error: "Make sure all required fields are filled in correctly and try again.",
                                message: error_2
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.findProductById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        return [4 /*yield*/, productService.getProductById(id)];
                    case 1:
                        product = _a.sent();
                        if (product) {
                            return [2 /*return*/, response.status(200).json(product)];
                        }
                        else {
                            return [2 /*return*/, response.status(404).json({ message: "Product with id ".concat(id, " not found") })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                error: "Make sure all required fields are filled in correctly and try again.",
                                message: error_3
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, sku, designation, description, validation, product, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, sku = _a.sku, designation = _a.designation, description = _a.description;
                        validation = valid.validate(sku, designation);
                        if (!validation.success) {
                            return [2 /*return*/, response.status(400).json({ success: false, message: validation.message })];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, productDatabase_1.default.create({ sku: sku, designation: designation, description: description })];
                    case 2:
                        product = _b.sent();
                        return [2 /*return*/, response.json(product)];
                    case 3:
                        error_4 = _b.sent();
                        return [2 /*return*/, response.status(400).send({
                                error: "Not create product",
                                message: error_4
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.searchByDesignation = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var designation, product, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        designation = request.params.designation;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, productService.getProductByDesignation(designation.toString())];
                    case 2:
                        product = _a.sent();
                        if (product) {
                            return [2 /*return*/, response.status(200).json(product)];
                        }
                        else {
                            return [2 /*return*/, response.status(404).json({ message: "Product with designation ".concat(designation, " not found") })];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [2 /*return*/, response.status(400).json({ error: 'Could not search product. Missing required parameter "designation".' })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.deleteBySku = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var sku, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sku = request.params.sku;
                        return [4 /*yield*/, productService.deleteBySku(sku)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            response.sendStatus(200);
                        }
                        else {
                            response.sendStatus(404);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        response.status(400).json({ message: error_6 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.updateProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, sku, designation, description, product, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, sku = _a.sku, designation = _a.designation, description = _a.description;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, productService.findSkuUpdate(sku, designation, description)];
                    case 2:
                        product = _b.sent();
                        if (!product) {
                            res.status(404).json({ message: 'Product not found' });
                            return [2 /*return*/];
                        }
                        res.status(200).json(product);
                        return [3 /*break*/, 4];
                    case 3:
                        error_7 = _b.sent();
                        console.error(error_7);
                        res.status(400).json({ message: 'Internal server error' });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.default = ProductController;
