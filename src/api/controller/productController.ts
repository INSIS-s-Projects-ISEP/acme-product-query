import { Request, Response } from "express";
import ProductRepository from "../../domain/repository/productRepository";
import ProductDatabase from "../../database/schemas/productDatabase";

class ProductController{    

      static async findAllProducts(request: Request, response: Response): Promise<any> {
        try {
            const products = await ProductRepository.findAllProducts();
            response.status(200).send(products)
            
        } catch (error) {
            return response.status(500).json({
                error: "No products found",
                message: error
            })       
        }
    }   

    static async findProductBySku(request: Request, response: Response) {
    try {
        const sku = request.params.sku;
        const product = await ProductRepository.findProductBySku(sku)
        if (product) {
            return response.status(200).json(product);
          } else {
            return response.status(404).json({ message: `Product with SKU ${sku} not found` });
          }
                
    } catch (error) {
         return response.status(500).json({
            error: "No products found",
            message: error
        })        
    }
}


 static async findProductById(request: Request, response: Response) {
    try {
        const id = request.params.id;

        const product = await ProductRepository.findProductById(id)
        if (product) {
            return response.status(200).json(product);
          } else {
            return response.status(404).json({ message: `Product with SKU ${id} not found` });
          }
                
    } catch (error) {
         return response.status(500).json({
            error: "No products found",
            message: error
        })
        
    }
}


static async create(request: Request, response: Response): Promise<any> {

    const { sku, designation, description } = request.body;

    try {
        const product = await ProductDatabase.create({
            sku,
            designation,
            description
        })        

        return response.json(product)
    } catch (error) {
        return response.status(500).send({
            error: "No create",
            message: error
        })       
    }
}   

static async searchByDesignation(request: Request, response: Response): Promise<Response> {
    const { designation } = request.params;   
    

    console.log("passou aqui", designation)
    if (!designation) {
      return response.status(400).json({ error: 'Missing required parameter "designation".' });
    } console.log("passou aqui", designation)

    try {
       
      const products = await ProductRepository.searchByDesignation(designation.toString());
      console.log(products)
      return response.status(200).json(products);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Could not search products.' });
    }
  }


}

export default ProductController;