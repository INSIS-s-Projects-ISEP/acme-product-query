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
        // validação do id do usuário
        const result = await this.productRepository.findProductById(id);
        return result;
      }
    
      async getProductBySku(sku: string) {
        // validação dos dados do usuário
        const result = await this.productRepository.findProductBySku(sku);
        return result;
      }

      async getProductByDesignation(designation: string) {
        // validação dos dados do usuário
        const result = await this.productRepository.findByDesignation(designation);
        return result;
      }
    
      async findAllProducts() {
        // validação do id do usuário
        const result = await this.productRepository.findAllProducts();
        return result;
      
    }

}


export default ProductService;