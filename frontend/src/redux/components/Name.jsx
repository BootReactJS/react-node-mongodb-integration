import nameActionCreatorFunction from "../action/nameActionCreator"
import {useRef} from "react"
import componentStore from "../store/store.js"
export function Name(){
    const refObject = useRef();
    const  sendData =
    () => {
        const actionObj = nameActionCreatorFunction(refObject.current.value);
        componentStore.dispatch(actionObj);
    }

    return(
        <div>
            <h1>Name Component</h1>
            <input ref = {refObject} type="text" />
            <button onClick = {sendData}>Submit</button>
        </div>
    );
}
export default Name;