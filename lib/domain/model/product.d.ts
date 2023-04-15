import { ProductDTO } from "../../dto/productDTO";
declare class Product {
    productId: number;
    sku: string;
    designation: string;
    description: string;
    constructor(productId: number, sku: string, designation: string, description: string);
    setSku(sku: string): void;
    setDesignation(designation: string): void;
    setDescription(description: string): void;
    updateProduct(p: Product): void;
    createProd(p: Product): void;
    toDto(): ProductDTO;
    static find(): void;
    static findById(sku: string): void;
}
export default Product;
