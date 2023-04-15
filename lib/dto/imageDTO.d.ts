import { ImageService } from "../domain/service/imageService";
export declare class ImageDTO {
    private service;
    private id;
    private productID;
    constructor(id: number, productID: number, service: ImageService);
    getProductID(): number;
    setProductID(productID: number): void;
    getId(): number;
    setId(id: number): void;
    getImageProduct(): Promise<Iterable<ImageDTO>>;
}
