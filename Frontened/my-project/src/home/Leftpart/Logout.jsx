import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

const Logout = () => {
  return (
    <div className="bg-gray-800  flex items-center justify-center p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer m-1 ">
      <RiLogoutCircleLine className="text-2xl text-white " />
      <p className="text-center text-md text-white">Logout</p>
    </div>
  );
};

export default Logout;
