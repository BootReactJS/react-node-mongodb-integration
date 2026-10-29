import "./EachType.css"
import { getCategoriesData } from "./httpclient";

export function EachType( {typeImage, typeName, setDataarray} ){
   
    return(
        <div className="eachType"
                onClick={() => {
                    getCategoriesData(setDataarray, typeName);
                }}        
         >
                <img src={typeImage} width={70} height={70}></img>
                <h2>{typeName}</h2>
        </div>
    );
}

export default EachType;
