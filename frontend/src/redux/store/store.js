import { legacy_createStore } from "redux";
import nameReducerFunction from "../reducers/nameReducer"

const componentStore = legacy_createStore(nameReducerFunction);

componentStore.subscribe(
    () =>{
        console.log(componentStore.getState() );
    }
)
export default componentStore;