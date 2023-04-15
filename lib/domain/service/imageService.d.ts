import { ImageDTO } from "../../dto/imageDTO";
import { ImageRepository } from "../repository/imageRepository";
import { FileStorageService } from "./fileStorageService";
export declare class ImageService {
    private readonly service;
    private readonly repository;
    private filename;
    constructor(filename: string, service: FileStorageService, repository: ImageRepository);
    getImageProduct(): Promise<ImageDTO[]>;
}
