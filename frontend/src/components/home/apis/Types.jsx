import EachType from "./EachType";  
import "./Types.css"

export function Types( { setDataarray } ){
    return (
        <section className="types">
            <EachType  setDataarray={setDataarray}   typeImage={"./furniture.jpg"}  typeName="furniture" />
            <EachType setDataarray={setDataarray}    typeImage={"./beauty.jpg"}  typeName="beauty" />
            <EachType setDataarray={setDataarray}  typeImage={"./groceries.jpg"}  typeName="groceries" />
            <EachType  setDataarray={setDataarray} typeImage={"./allwordlogo.jpg"}  typeName="All" />
            <EachType setDataarray={setDataarray}  typeImage={"./fragrances.jpg"}  typeName="fragrances" />
        </section>
    );
}
export default Types;
