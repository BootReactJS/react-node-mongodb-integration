import { useRef } from "react";

export function UseRef(){
    var refHObject = useRef(null);

    function changeContent(){
        var h3DOM = refHObject.current;
        h3DOM.style.color = "green";
    }
    return (

        <div className="container">
            <h3 ref={refHObject}>UseRef h3</h3>
            <button  id="buttonRef" onClick={changeContent}>button</button>
        </div>
    );
}
export default UseRef;