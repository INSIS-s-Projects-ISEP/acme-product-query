import ProductModel from '../../database/schemas/productDatabase';


class ProductRepository {
    
    async findAllProducts(){
        const products = ProductModel.find();
        return products
    }

    async findProductBySku(sku: string) {
        const product = ProductModel.find({sku});
        return product
    }
    
    async findProductById(id: string) {
        const product = ProductModel.findById(id);
        return product
    }

    async create(sku: string, designation: string, description: string) {
        const created = ProductModel.create({sku, designation, description});
        return created
    }

    async findByDesignation(designation: string){
        const product = ProductModel.find({ designation });
        return product;
      }

    
}

export default ProductRepository;
