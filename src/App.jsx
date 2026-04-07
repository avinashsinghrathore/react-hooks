import { useState } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext";
import MyStateComponent from "./Hooks/MyStateComponent";
import MyUseRef from "./Hooks/UseRef/MyUseRef";
import Parent from "./Hooks/UseRef/Parent";
import Counter from "./Hooks/UseReducer/Counter";
import User from "./Hooks/UseReducer/User";

function App() {
  const [name, setName] = useState("Aarav");
  return (
    <>
      <MyStateComponent />
      <hr />
      <MyUseRef />
      <hr />
      <UserContext.Provider value={{ name, setName }}>
        <Parent />
      </UserContext.Provider>
      <hr />
      <Counter />
      <hr />
      <User />
    </>
  );
}

export default App;
