
const Product =  require("../schema/productsSchema.js");


 function getProducts(categoryName){
      if( categoryName === "all"){
         return Product.find();
      }else{
         return Product.find( {category: categoryName} );
      }

 }

module.exports = {getProducts} 