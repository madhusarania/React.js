// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let obj = {
    username: "madhu",
    age: 25,
  };
  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      <Card username="madhucode" btnText="click me" />
      <Card username="madhu" />
    </>
  );
}

export default App;
