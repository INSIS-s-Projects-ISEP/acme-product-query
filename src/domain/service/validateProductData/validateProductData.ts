class ValidateProductData{

  public validate(sku: string, designation: string): { success: boolean, message: string } {
    if (!sku || sku.trim().length === 0) {
      const errorMessage = "SKU field is required";
      return { success: false, message: errorMessage };    
    }
    if (!sku || sku.trim().length !== 12) {

        const errorMessage = "SKU must be 12 characters";
      return { success: false, message: errorMessage };
      }
    if (!designation || designation.trim().length === 0) {
      const errorMessage = "Designation field is required";
      return { success: false, message: errorMessage };
    }
   
    return { success: true, message: "request Ok" };
  }
}
export default ValidateProductData;