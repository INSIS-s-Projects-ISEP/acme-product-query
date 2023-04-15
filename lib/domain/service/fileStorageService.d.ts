import { FileStorageProperties } from "../../property/fileStorageProperties";
export declare class FileStorageService {
    private fileStorageProperties;
    private fileStorageLocation;
    constructor(fileStorageProperties: FileStorageProperties);
    storeFile(file: any): string;
}
