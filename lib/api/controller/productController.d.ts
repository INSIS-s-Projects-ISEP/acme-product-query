import { Request, Response } from "express";
declare class ProductController {
    static findAllProducts(request: Request, response: Response): Promise<any>;
    static findProductBySku(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    static findProductById(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    static create(request: Request, response: Response): Promise<any>;
    static searchByDesignation(request: Request, response: Response): Promise<Response>;
    static deleteBySku(request: Request, response: Response): Promise<void>;
    static updateProduct(req: Request, res: Response): Promise<void>;
}
export default ProductController;
