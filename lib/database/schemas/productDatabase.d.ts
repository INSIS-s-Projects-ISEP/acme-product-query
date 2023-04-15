import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    sku: string;
    designation: string;
    description?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    sku: string;
    designation: string;
    description?: string | undefined;
}> & Omit<{
    sku: string;
    designation: string;
    description?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    sku: string;
    designation: string;
    description?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    sku: string;
    designation: string;
    description?: string | undefined;
}>> & Omit<mongoose.FlatRecord<{
    sku: string;
    designation: string;
    description?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default _default;
