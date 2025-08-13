import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";
import "../../index.css";

function right() {
  return (
    <div className="w-[70%] bg-slate-900 text-gray-300">
      <Chatuser />
      <div
        className=" no-scrollbar overflow-y-auto mb-2"
        style={{ maxHeight: "calc(92vh - 10vh)" }}
      >
        <Messages />
      </div>

      <div>
        <TypeSend />
      </div>
    </div>
  );
}

export default right;
