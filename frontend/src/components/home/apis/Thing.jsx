import React from "react";
import "./Thing.css"

export function Thing(props){
    const item = props.content;
 const { id, title, price, description, category, images } = item;

    return(
        <div className="theThing">
            <img src={images[0]} width={"100%"} height="240px"></img>
            <h2>{title && title.slice(0,21)}</h2>
            <p>${price}</p>
            <p>{category}</p>
        </div>
    );
}
export default Thing;