import { ImageDTO } from "../../dto/imageDTO";
import { ImageService } from "../service/imageService";
import Product from "./product";

// import { Resource } from '@nestjs/core'

export class ProdImage {
    private id!: number;
    private product!: Product;
    private service!:ImageService; 
    // private image!: Resource;
  
    toDto(): ImageDTO {
      return new ImageDTO(this.id, this.product.productId, this.service);
    }
  }