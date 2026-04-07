import { useState } from "react";
import "./App.css";
import { UserContext } from "./context/UserContext";
import MyStateComponent from "./Hooks/MyStateComponent";
import MyUseRef from "./Hooks/UseRef/MyUseRef";
import Parent from "./Hooks/UseRef/Parent";

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
    </>
  );
}

export default App;
