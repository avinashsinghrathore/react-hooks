import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Parent = () => {
  const { name, setName } = useContext(UserContext);
  return (
    <div>
      <h4>i am Parent component</h4>
      <h4>example of usecontext api</h4>
      <h4>hello , {name}</h4>
    </div>
  );
};

export default Parent;
