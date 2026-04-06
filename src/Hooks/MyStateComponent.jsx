import React, { useState } from "react";

const MyStateComponent = () => {
  const [name, setName] = useState("Avinash");
  const [count, setCount] = useState(0);
  function changeName() {
    console.log(name);
    setName("Aarav and softy");
  }

  function handleIncrement() {
    console.log(count);
    setCount((prev) => prev + 1);

    // setCount(count + 1);
    // setCount(count + 2);  // it will always consider latest value
  }
  function handleDecrement() {
    // setCount(count - 1);
    setCount((prev) => prev - 1);
  }
  return (
    <div>
      <h1>hello,{name}</h1>
      <button onClick={changeName}>click me</button>
      <hr />
      <button onClick={handleIncrement}>Increment</button>
      <h3>count is : {count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyStateComponent;
