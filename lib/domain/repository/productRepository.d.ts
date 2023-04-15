/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import Product from '../model/product';
declare class ProductRepository {
    findAllProducts(): Promise<(import("mongoose").Document<unknown, {}, {
        sku: string;
        designation: string;
        description?: string | undefined;
    }> & Omit<{
        sku: string;
        designation: string;
        description?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findProductBySku(sku: string): Promise<(import("mongoose").Document<unknown, {}, {
        sku: string;
        designation: string;
        description?: string | undefined;
    }> & Omit<{
        sku: string;
        designation: string;
        description?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findProductById(id: string): Promise<(import("mongoose").Document<unknown, {}, {
        sku: string;
        designation: string;
        description?: string | undefined;
    }> & Omit<{
        sku: string;
        designation: string;
        description?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null>;
    create(sku: string, designation: string, description: string): Promise<import("mongoose").Document<unknown, {}, {
        sku: string;
        designation: string;
        description?: string | undefined;
    }> & Omit<{
        sku: string;
        designation: string;
        description?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findByDesignation(designation: string): Promise<(import("mongoose").Document<unknown, {}, {
        sku: string;
        designation: string;
        description?: string | undefined;
    }> & Omit<{
        sku: string;
        designation: string;
        description?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    deleteBySku(sku: string): Promise<any>;
    update(sku: string, designation: string, description: string): Promise<Product | null>;
}
export default ProductRepository;
