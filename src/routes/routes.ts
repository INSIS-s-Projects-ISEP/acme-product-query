import { Router } from "express";
import ProductController from "../api/controller/productController";

const routes = Router();

routes.get("/products", ProductController.findAllProducts);

routes.get("/products/sku/:sku", ProductController.findProductBySku);

routes.get("/products/id/:id", ProductController.findProductById);

routes.get("/products/designation/:designation", ProductController.searchByDesignation);

routes.post("/products", ProductController.create);

routes.delete('/products/sku/:sku', ProductController.deleteBySku);

routes.put('/products/sku/:sku', ProductController.updateProduct);


export default routes;
