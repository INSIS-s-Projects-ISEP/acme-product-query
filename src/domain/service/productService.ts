// import { Product } from "../model/product";

// import { Request, Response } from "express";

// class ProductService{
//   async findAllProducts(request: Request, response: Response) {
//     try {
//         const products = await ProductDatabase.find();
//         return response.json(products)
        
//     } catch (error) {
//         return response.status(500).json({
//             error: "No products found",
//             message: error
//         })
        
//     }
// }

// async getProductBySku(request: Request, response: Response) {
//     try {
//         const sku = request.params.sku;
//         const product = await Product.getProductBySku(sku)
//         if (product) {
//             return response.status(200).json(product);
//           } else {
//             return response.status(404).json({ message: `Product with SKU ${sku} not found` });
//           }
                
//     } catch (error) {
//          return response.status(500).json({
//             error: "No products found",
//             message: error
//         })
        
//     }
// }
// }

// export default ProductService;