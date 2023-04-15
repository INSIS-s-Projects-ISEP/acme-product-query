import mongoose from 'mongoose';
import Product from '../model/product';
import ProductModel from '../../database/schemas/productDatabase';
// const ProductData = mongoose.model('Product');


class ProductRepository {
    
    static async findAllProducts(){
        const products = ProductModel.find();
        return products
    }

    static async findProductBySku(sku: string) {
        const product = ProductModel.find({sku});
        return product
    }
    
    static async findProductById(id: string) {
        const res = ProductModel.findById(id);
        return res
    }

    // static async createProd(sku: string, designation: string, description: string) {
    //     const res = ProductModel.createProd({sku, designation, description});
    //     return res
    // }

    static async searchByDesignation(designation: string){
        const product = ProductModel.find({ designation });
        return product;
      }

    
}

export default ProductRepository;
