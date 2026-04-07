import React, { useReducer } from "react";

// initialize count value
const initialState = { count: 0 };

// reducer logic
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      state;
  }
}

const Counter = () => {
  // reducer state to manage states
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>Counter</h4>
      <h4>Count is : {state.count}</h4>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
