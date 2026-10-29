import { changeProduct } from "./card"
import "./Card.css"
import { useState } from "react";

function Card() {
    var [img, setImg] = useState("./mobiles.jpg");
    var [title, setTitle] = useState("Childhood");

    return (
        <div className="card">
            <img src={img} width="250px" height="200px"></img>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, alias!</p>
            <button
                onClick={() => {
                    changeProduct(setImg, setTitle);
                }}
            >
                Change Product
            </button>
        </div>
    );
}
export default Card;