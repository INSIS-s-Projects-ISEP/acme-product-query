import ProductRepository from "../repository/productRepository";

class ProductService{
    productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
      }
    
      async create(sku: string, designation: string, description: string) {
        const created = await this.productRepository.create(sku, designation, description);
        return created;
      }
    
      async getProductById(id: string) {
        const result = await this.productRepository.findProductById(id);
        return result;
      }
    
      async getProductBySku(sku: string) {
        const result = await this.productRepository.findProductBySku(sku);
        return result;
      }

      async getProductByDesignation(designation: string) {
        const result = await this.productRepository.findByDesignation(designation);
        return result;
      }
    
      async findAllProducts() {
        const result = await this.productRepository.findAllProducts();
        return result;
      
    }


    async deleteBySku(sku: string) {
      console.log("333000000",sku)
      const result = await this.productRepository.deleteBySku(sku);
      return result;
    
  }  

  async findSkuUpdate(sku: string, designation: string, description: string ) {
    // console.log(sku)
    const result = await this.productRepository.update(sku, designation, description );
    return result;
  
}

}


export default ProductService;