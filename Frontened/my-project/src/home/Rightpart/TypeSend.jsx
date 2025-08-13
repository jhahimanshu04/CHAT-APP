import React from "react";
import { IoMdSend } from "react-icons/io";

const TypeSend = () => {
  return (
    <div className="flex space-x-4 h-[8vh] text-center bg-gray-700 mt-2 ">
      <div children className="w-[70%] mx-4">
        <input
          type="text"
          placeholder="Type here"
          className="input bg-black border-gray-700 outline-none mt-1 px-4 py-3 text-white w-full rounded-xl"
        />
      </div>
      <button className="bg-yellow-500 text-white p-2 rounded">
        <IoMdSend className="text-3xl" />
      </button>
    </div>
  );
};

export default TypeSend;
