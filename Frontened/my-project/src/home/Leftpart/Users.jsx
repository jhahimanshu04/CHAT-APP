import React from "react";
import "../../index.css";
import User from "./User";

function Users() {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar">
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 sticky top-0 z-10">
        Messages
      </h1>
      <div
        className="py-2 overflow-y-auto no-scrollbar"
        style={{ maxHeight: "calc(82vh - 7vh)" }}
      >
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default Users;
