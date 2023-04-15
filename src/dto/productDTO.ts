export class ProductDTO{
    private sku: string;
    private designation: string;

    constructor(sku: string, designation: string){
        this.sku = sku;
        this.designation = designation;
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


}