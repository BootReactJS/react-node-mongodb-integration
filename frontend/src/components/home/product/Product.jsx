import "./Product.css"

export function Product( {parameter} ){
    return (
        <div className="Product">
            <img src={parameter} width="100%" height="85%" margin-top="5px" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    );
}
export default Product;