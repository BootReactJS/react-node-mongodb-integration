import EachType from "./EachType";  
import "./Types.css"

export function Types( { setDataArray } ){
    return (
        <section className="types">
            <EachType  setDataArray={setDataArray}   typeImage={"./furniture.jpg"}  typeName="furniture" />
            <EachType setDataArray={setDataArray}    typeImage={"./beauty.jpg"}  typeName="beauty" />
            <EachType setDataArray={setDataArray}  typeImage={"./groceries.jpg"}  typeName="groceries" />
            <EachType  setDataArray={setDataArray} typeImage={"./allwordlogo.jpg"}  typeName="All" />
            <EachType setDataArray={setDataArray}  typeImage={"./fragrances.jpg"}  typeName="fragrances" />
        </section>
    );
}
export default Types;
