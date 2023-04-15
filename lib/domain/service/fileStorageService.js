"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageService = void 0;
var common_1 = require("@nestjs/common");
var path = require("path");
var fs = require("fs");
var fileStorageProperties_1 = require("../../property/fileStorageProperties");
var fileStorageException_1 = require("../../exception/fileStorageException");
var FileStorageService = exports.FileStorageService = /** @class */ (function () {
    function FileStorageService(fileStorageProperties) {
        this.fileStorageProperties = fileStorageProperties;
        this.fileStorageLocation = path.join(__dirname, '..', this.fileStorageProperties.getUploadDir());
        try {
            fs.mkdirSync(this.fileStorageLocation, { recursive: true });
        }
        catch (ex) {
            throw new fileStorageException_1.FileStorageException("Could not create the directory where the uploaded files will be stored.");
        }
    }
    FileStorageService.prototype.storeFile = function (file) {
        // Normalize file name
        var fileName = path.basename(file.originalname);
        // Check if the file's name contains invalid characters
        if (fileName.includes('..')) {
            throw new fileStorageException_1.FileStorageException("Sorry! Filename contains invalid path sequence ".concat(fileName));
        }
        // Copy file to the target location (Replacing existing file with the same name)
        try {
            var targetLocation = path.join(this.fileStorageLocation, fileName);
            fs.writeFileSync(targetLocation, file.buffer, { flag: 'w' });
            return fileName;
        }
        catch (ex) {
            throw new fileStorageException_1.FileStorageException("Could not store file, Please try again!");
        }
    };
    FileStorageService = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [fileStorageProperties_1.FileStorageProperties])
    ], FileStorageService);
    return FileStorageService;
}());
