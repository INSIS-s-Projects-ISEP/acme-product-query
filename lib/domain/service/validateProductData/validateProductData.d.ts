declare class ValidateProductData {
    validate(sku: string, designation: string): {
        success: boolean;
        message: string;
    };
}
export default ValidateProductData;
