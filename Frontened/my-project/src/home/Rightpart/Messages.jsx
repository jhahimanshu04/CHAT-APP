import React from "react";
import Message from "./Message";
import "../../index.css";

const Messages = () => {
  return (
    <div
      className="no-scrollbar overflow-y-auto"
      style={{ minHeight: "calc(84vh - 8vh)" }}
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
