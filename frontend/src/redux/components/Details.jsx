import React from "react"
import { useSelector } from "react-redux"


export function Details(){
    const reduxStore_data = useSelector( 
        (storeData) => {
            return storeData;
        }
    );

    return(
        <div className="container">
            <h1>Details Component</h1>
            <h3 style={{ color: "green" }}>Name : {reduxStore_data}</h3>

        </div>

    );
}
export default Details;