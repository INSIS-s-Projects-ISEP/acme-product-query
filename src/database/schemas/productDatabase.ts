import mongoose from "mongoose";

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

