const { getProducts } = require("../model/productsModel")

function getAllProducts(request, response){
         const categoryName = request.query.category;
        console.log(" categoryName " + categoryName);
         getProducts(categoryName)
                .then( (data)=>{
                         console.log(data)
                        response.send( {ok: true,  result: data} );
                }).catch( (error) => {
                        response.send( {ok: false, message: "failed to fetch the data"} );
                      //  console.log(error)
                });
}

module.exports = { getAllProducts } ;
