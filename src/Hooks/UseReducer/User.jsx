import React, { useReducer } from "react";

// initialize input fields
const initialState = {
  name: "",
  email: "",
  age: "",
};

// reducer logic
function reducer(state, action) {
  switch (action.type) {
    case "updateFields":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return initialState;
    default:
      state;
  }
}

const User = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "updateFields",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", state);
  };
  return (
    <div>
      <h4>User</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={state.age}
          placeholder="Enter age"
          onChange={handleChange}
        />
        <button>Submit</button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default User;
