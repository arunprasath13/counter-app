import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Buttons from "./Components/Buttons";

function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl m-auto">
          <Buttons increment={increment} decrement = {decrement}/>
      </div>
      <div className="flex justify-center">
        <h1 className="text-8xl text-white">{count}</h1>
      </div>
    </div>
  );
}

export default App;
