import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";
import "../../index.css";

function Left() {
  return (
    <div className="w-[30%] bg-black text-gray-300 flex flex-col h-screen">
      {/* Top search section */}
      <div className="sticky top-0 bg-black z-10">
        <Search />
      </div>

      {/* Scrollable users list */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Users />
      </div>

      {/* Fixed bottom logout button */}
      <div className="sticky bottom-0 bg-black z-10">
        <Logout />
      </div>
    </div>
  );
}

export default Left;
