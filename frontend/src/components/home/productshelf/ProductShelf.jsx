import Product  from "../product/Product"
import "./ProductShelf.css"

import { useSelector } from "react-redux"

export function ProductShelf() {
  /*  const data =  useSelector(
        (store) => {
            return store;
        }
    ); */

    return(
        <div className="ProductShelf">
            <h3>Shelf</h3>
            {/* <h4>{data}</h4> */}
            <section className="Productrow">
                <Product parameter={"./headsets.jpg"} />
                <Product parameter={"./tablet.jpg"} />
                <Product parameter={"./VRhset.jpg"} />
                <Product parameter={"./neoncables.jpg"} />
            </section>
        </div>
    );
}
export default ProductShelf;