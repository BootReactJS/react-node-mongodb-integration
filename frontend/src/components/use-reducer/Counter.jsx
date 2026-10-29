import { useReducer } from "react";

const reducer = (state, action) => {
  var newData;
  if (action.type === "inc") {
    newData = state + 1;
  } else if (action.type === "dec") {
    newData = state - 1;
  } else {
    newData = 0;
  }

  return newData;
};

export function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="container">
      <h1>Count Value is : {state}</h1>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        inc
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        dec
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={dispatch}>reset</button>&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Counter;