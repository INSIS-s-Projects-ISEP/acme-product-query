import { Request, Response } from "express";
import ProductService from "../../domain/service/productService";
import ProductDatabase from "../../database/schemas/productDatabase";
import ValidateProductData from "../../domain/service/validateProductData/validateProductData";

const productService = new ProductService();
const valid = new ValidateProductData();
class ProductController{    

      static async findAllProducts(request: Request, response: Response): Promise<any> {
        try {
            const products = await productService.findAllProducts();
            response.status(200).send(products)

            if (products) {
              return response.status(200).json(products);
            } else {
              return response.status(404).json({ message: `Not found product` });
            }
            
        } catch (error) {
            return response.status(400).json({
                error: "Make sure all required fields are filled in correctly and try again.",
                message: error
            })       
        }
    }   

    static async findProductBySku(request: Request, response: Response) {
    try {
        const sku = request.params.sku;
        const product = await productService.getProductBySku(sku)
        if (product) {
            return response.status(200).json(product);
          } else {
            return response.status(404).json({ message: `Product with SKU ${sku} not found` });
          }
                
    } catch (error) {
         return response.status(400).json({
            error: "Make sure all required fields are filled in correctly and try again.",
            message: error
        })        
    }
}


 static async findProductById(request: Request, response: Response) {
    try {
        const id = request.params.id;

        const product = await productService.getProductById(id);
        if (product) {
            return response.status(200).json(product);
          } else {
            return response.status(404).json({ message: `Product with id ${id} not found` });
          }
                
    } catch (error) {
         return response.status(400).json({
            error: "Make sure all required fields are filled in correctly and try again.",
            message: error
        })
        
    }
}

static async create(request: Request, response: Response): Promise<any> {

    const { sku, designation, description } = request.body;

    const validation = valid.validate(sku, designation);

    if(!validation.success){
      return response.status(400).json({ success: false, message: validation.message });
    }

    try {
        const product = await ProductDatabase.create({sku, designation, description})       

        return response.json(product)
    } catch (error) {
        return response.status(400).send({
            error: "Not create product",
            message: error
        })       
    }
}   

static async searchByDesignation(request: Request, response: Response): Promise<Response> {
    const { designation } = request.params;       
    try {
       
      const product = await productService.getProductByDesignation(designation.toString());
      if (product) {
        return response.status(200).json(product);
      } else {
        return response.status(404).json({ message: `Product with designation ${designation} not found` });
      }
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: 'Could not search product. Missing required parameter "designation".' });
    }
  }


}

export default ProductController;