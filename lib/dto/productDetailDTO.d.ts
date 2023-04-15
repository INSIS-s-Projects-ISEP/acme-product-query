export declare class ProductDetailDTO {
    private sku;
    private designation;
    private description;
    constructor(sku: string, designation: string, description: string);
    getSku(): string;
    setSku(sku: string): void;
    getDesignation(): string;
    setDesignation(designation: string): void;
    getDescription(): string;
    setDescription(description: string): void;
}
