import { ImageService } from "../domain/service/imageService";

export class ImageDTO {

    private service:ImageService; // get service
    private id: number;

    private productID: number;

    constructor(id: number, productID: number, service: ImageService) {
        this.id = id;
        this.productID = productID;
        this.service = service;

    }

    public getProductID(): number {
        return this.productID;
    }

    public setProductID(productID: number): void{
        this.productID = productID;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public async getImageProduct(): Promise<Iterable<ImageDTO>> {
        const imageDTOs = await this.service.getImageProduct();
        return imageDTOs;
    }
}
