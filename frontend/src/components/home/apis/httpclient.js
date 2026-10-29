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
          /*   console.log("response:", resolvedata);
            console.log("data:", resolvedata.data);
            console.log("result:", resolvedata.data.result);
            console.log(Array.isArray(resolvedata.data.result)); */
            setDataarray(resolvedata.data.result);
        })
        .catch( (rejectdata)  =>{
            toast.error("Error: " + (rejectdata.response?.data || rejectdata.message));
        })
}

export function getCategoriesData(setDataarray, categoryName) {
  invokeAPI(setDataarray, categoryName);
}