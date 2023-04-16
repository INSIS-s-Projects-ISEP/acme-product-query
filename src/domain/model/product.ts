import { ProductDTO } from "../../dto/productDTO";

class Product{
   

    public productId: number;

    public sku: string;

    public designation: string ;

    public description:string ;

    constructor(productId: number, sku: string, designation: string, description: string) {
        this.productId = productId;
        this.sku = sku;
        this.designation = designation;
        this.description = description;        
    }
    public setSku(sku: string): void {
        if (!sku || sku.trim().length === 0) {
            throw new Error("SKU is a mandatory attribute of Product.");
        }
        if (sku.length != 12) {
            throw new Error("SKU must be 12 characters long.");
        }

        this.sku = sku;
    }

    public setDesignation(designation:string): void {
        if (!designation || designation.trim().length === 0) {
            throw new Error("Designation is a mandatory attribute of Product.");
        }
        if (designation.length > 50) {
            throw new Error("Designation must not be greater than 50 characters.");
        }
        this.designation = designation;
    }

    public setDescription( description: string): void {
        if (!description || description.trim().length === 0) {
            throw new Error("Description is a mandatory attribute of Product.");
        }

        if (description.length > 1200) {
            throw new Error("Description must not be greater than 1200 characters.");
        }

        this.description = description;
    }

    public updateProduct(p: Product): void {
        this.setDesignation(p.designation);
        this.setDescription(p.description);
    }

    public createProd(p: Product): void {
        this.setSku(p.sku);
        this.setDesignation(p.designation);
        this.setDescription(p.description);
    }

    public toDto(): ProductDTO {
        return new ProductDTO(this.sku, this.designation);
    }

}

export default Product;