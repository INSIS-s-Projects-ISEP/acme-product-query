import ProductModel from '../../database/schemas/productDatabase';
import Product from '../model/product';


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

      async deleteBySku(sku: string):Promise<any>{
        // await mongoose.connect('mongodb://127.0.0.1/productquery');
        // console.log(typeof sku);
        // console.log("------------------sku--------------------", sku.toString())
        // const result = await db.collection('products').deleteOne({ sku: sku });
        const result = await ProductModel.deleteOne({ sku: sku });
        // const result = await ProductModel.findByIdAndDelete(id);
        return result;
      }

      async update(
        sku: string,
        designation: string,
        description: string
      ): Promise<Product | null> {
        const product = await ProductModel.findOneAndUpdate(
          { sku: sku },
          { designation: designation, description: description },
          { new: true }
        );
        return product ? product.toObject() : null;
      }

    
}

export default ProductRepository;
