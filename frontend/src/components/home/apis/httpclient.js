import axios from "axios";
import { toast } from "react-toastify";


export function invokeAPI(setDataArray, categoryName = "all"){
    axios.get("http://localhost:4936/api/products/allproducts",
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
                category: categoryName.toLowerCase()
            }
        })
       .then(   
            ( resolvedata) =>{
               // console.log("response:", resolvedata);

                if( resolvedata.data.ok ){
                    //console.log("data:", resolvedata.data);
                    //console.log("result:", resolvedata.data.result);
                    //console.log(Array.isArray(resolvedata.data.result)); 
                    //setDataArray(resolvedata.data.result);
                    setDataArray([...resolvedata.data.result]);

                }else{
                    throw Error(resolvedata.data.message);
                }
            }
       )
        .catch( (rejectdata)  =>{
           // toast.error("Error: " + (rejectdata.response?.data || rejectdata.message));
           //console.log("error...................", rejectdata.message);
           //console.log("error rejectdata...................", rejectdata);

            toast.error(rejectdata.message);
        })
}

export function getCategoriesData(setDataArray, categoryName) {
  invokeAPI(setDataArray, categoryName);
}