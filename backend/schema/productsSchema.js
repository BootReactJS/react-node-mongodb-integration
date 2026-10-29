const { Schema, model } = require("mongoose");
const ProductSchema = new Schema( 
        {
        image: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: String,
        },
        category: {
            type: String,
        }

        }
    );
//const Product = mongoose.model("Product", productSchema, "products");

const ProductModelClass = model( "product", ProductSchema,   "products" );
module.exports = ProductModelClass ;


