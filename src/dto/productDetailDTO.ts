export class ProductDetailDTO{
    private sku: string;
    private designation: string;
    private description: string;

    constructor(sku: string, designation: string, description: string){
        this.sku = sku;
        this.designation = designation;
        this.description = description;
    }

    public getSku(): string{
        return this.sku
    }

    public setSku(sku: string): void{
        this.sku = sku;
    }


    public getDesignation(): string{
        return this.designation;
    }

    public setDesignation(designation: string): void{
        this.designation = designation;
    }

    public getDescription(): string{
        return this.description;
    }

    public setDescription(description: string): void{
        this.description = description;
    }


}