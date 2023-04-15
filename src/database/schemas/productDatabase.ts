import mongoose, { Document, Schema } from "mongoose";

// const Product = new mongoose.Schema({
//     sku:{
//         type: String,
//         required: true,
//         unique: true
//     },

//     designation:{
//         type: String,
//         required: true,
//     },

//     description:{
//         type: String,
//     }
// })

// export default mongoose.model("Product", Product)

// export interface IProduct extends Document {
//   sku: string;
//   designation: string;
//   description: string;
// }

const ProductDatabase = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
    unique: true,
  },

  designation: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
});

export default mongoose.model("ProductDatabase", ProductDatabase);

// export default ProductModel;
