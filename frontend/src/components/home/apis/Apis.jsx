import "./Apis.css"
import { invokeAPI } from "./httpclient"
import React, { useState, useEffect } from "react";
import Thing from "./Thing"
import Types from "./Types";  

export function Apis(){

    var [dataArray, setDataArray] =  useState([]);

    useEffect(
        () => {invokeAPI(setDataArray, "all");},
        []
    )
   /*  return(
        <section>
        <Types  setProducts={setDataArray} />
     
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
   {/*  {dataarray?.map((item, index) => (
      <div key={item._id || index}>
        {item.name || item.title }

      </div>
    ))} */}


   <section>
        <Types  setProducts={setDataArray} />
     
        <section className="accomdater">
            {dataArray?.map((item, index) => (
              <div key={item._id || index} className=".types">
                {item.name || item.title }
                  return <Thing class = "theThing" key={item._id} content={item}/>
              </div>
            ))}
        </section>
      </section> 

      
       
  </div>
);

}
export default Apis;