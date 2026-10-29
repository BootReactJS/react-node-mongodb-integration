const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    image: { type: String },
    title: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

// Prevent duplicate products by title + category
ProductSchema.index({ title: 1, category: 1 }, { unique: true });

const Product = model("Product", ProductSchema, "products");
module.exports = Product;