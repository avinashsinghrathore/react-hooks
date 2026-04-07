import React, { useEffect, useRef } from "react";
import { useState } from "react";

const MyUseRef = () => {
  const [name, setName] = useState("");
  //   const [count, setCount] = useState(0);
  const count = useRef(0);
  const inputEle = useRef("");

  // this function will access the dom elements with the help of useRef
  const handleClick = () => {
    console.log(inputEle);
    inputEle.current.style.color = "red";
  };

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <h3>MyUseRef example</h3>
      <input
        ref={inputEle}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h4>Name is : {name}</h4>
      <h4>Rendering count is : {count.current}</h4>
      <button onClick={handleClick}>Click ref example</button>
    </div>
  );
};

export default MyUseRef;
