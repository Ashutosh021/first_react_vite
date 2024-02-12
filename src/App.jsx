import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <h3>NavBar</h3>
      <div className="box">
        <h1>Welcome,<br/>First Page with React + Vite</h1>
      </div>
    </>
  );
}

export default App;
