// JS function
const nameReducerFunction = 
    ( storeData = "", actionObject) => {
        var newData = storeData;
        if( actionObject.type === "name"){
            newData = actionObject.payload;
        }
        return newData;
}
export default nameReducerFunction;