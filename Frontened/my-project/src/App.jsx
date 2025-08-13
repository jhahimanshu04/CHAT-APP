import React from "react";
import Left from "./home/Leftpart/left";
import Right from "./home/Rightpart/right";
import "././index.css";

function App() {
  return (
    <div className="flex min-h-full h-screen no-scrollbar ">
      <Left />
      <Right />
    </div>
  );
}

export default App;
