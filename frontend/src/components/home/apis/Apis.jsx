import "./Apis.css"
import { invokeAPI } from "./httpclient"
import { useState, useEffect } from "react";
import Thing from "./Thing"
import Types from "./Types";  

export function Apis(){

    var [dataarray, setDataarray] =  useState(null);

    useEffect(
        () => {invokeAPI(setDataarray, "all");},
        []
    )
   /*  return(
        <section>
        <Types  setProducts={setDataarray} />
     
        <section className="accomdater">
            {
              dataarray && dataarray.map( function(element,index){
                   return <Thing key={element.id} content={element}/>
                //    return <Thing key={element.id ? element.id : `${element.name}-${index}`} content={element} />
                }) 
                
            }
      
        </section>
       </section>
        
    ); */
    return (
  <div>
    {dataarray?.map((item, index) => (
      <div key={item._id || index}>
        {item.name || item.title }

      </div>
    ))}
  </div>
);

}
export default Apis;