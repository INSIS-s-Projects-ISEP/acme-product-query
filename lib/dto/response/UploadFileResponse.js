"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileResponse = void 0;
var UploadFileResponse = /** @class */ (function () {
    function UploadFileResponse(fileName, fileDownloadUri, fileType, size) {
        this.fileName = fileName;
        UploadFileResponse.fileDownloadUri = fileDownloadUri;
        this.fileType = fileType;
        this.size = size;
    }
    UploadFileResponse.prototype.getFileName = function () {
        return this.fileName;
    };
    UploadFileResponse.prototype.setFileName = function (fileName) {
        this.fileName = fileName;
    };
    UploadFileResponse.prototype.getFileDownloadUri = function () {
        return UploadFileResponse.fileDownloadUri;
    };
    UploadFileResponse.prototype.setFileDownloadUri = function (fileDownloadUri) {
        UploadFileResponse.fileDownloadUri = fileDownloadUri;
    };
    UploadFileResponse.prototype.getFileType = function () {
        return this.fileType;
    };
    UploadFileResponse.prototype.setFileType = function (fileType) {
        this.fileType = fileType;
    };
    UploadFileResponse.prototype.getSize = function () {
        return this.size;
    };
    UploadFileResponse.prototype.setSize = function (size) {
        this.size = size;
    };
    return UploadFileResponse;
}());
exports.UploadFileResponse = UploadFileResponse;
