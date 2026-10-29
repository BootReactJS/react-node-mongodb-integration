import axios from "axios";
import { toast } from "react-toastify";


export function invokeAPI(setDataarray, categoryName = "all"){
    //axios.get("https://dummyjson.com/products")
    axios.get("http://localhost:4936/api/products/allproducts",
        {
                params: {
                category: categoryName.toLowerCase(),
            }
    })
    
        .then(   ( resolvedata) =>{
            console.log( "resolvedata result" + resolvedata)

            setDataarray(resolvedata.data.result)
        })
        .catch( (rejectdata)  =>{
           toast.error("rejectdata " + rejectdata.response)
        })
}

export function getCategoriesData(setDataarray, categoryName) {
  invokeAPI(setDataarray, categoryName);
}