import React from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import "././index.css";
import Signup from "./components/Signup";

function App() {
  return (
    // <div className="flex min-h-full h-screen no-scrollbar ">
    //   {/* // <Left />
     // <Right /> */}

      <div className="bg-gray-800">
        <Signup />
      </div>
    
  );
}

export default App;
