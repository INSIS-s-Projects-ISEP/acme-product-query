"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageProperties = void 0;
var FileStorageProperties = /** @class */ (function () {
    function FileStorageProperties(uploadDir) {
        this.uploadDir = uploadDir;
    }
    FileStorageProperties.prototype.getUploadDir = function () {
        return this.uploadDir;
    };
    FileStorageProperties.prototype.setUploadDir = function (uploadDir) {
        this.uploadDir = uploadDir;
    };
    return FileStorageProperties;
}());
exports.FileStorageProperties = FileStorageProperties;
