import React from "react";
import Chat from "./Icons/Chat";

function ChatArea() {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4 mb-4">
      <div>
        <h1 className="text-xl font-bold">Contact</h1>
        <p className="my-4">Contact us if your question could not be answered.</p>
      </div>
      <div>
        <div className="flex">
        <div  >
          <Chat />
        </div>
        <div>
          <h1 className="text-xl font-bold">Live chat</h1>
        </div>
        </div>
        <p className="my-4">The quickest way to reach out teams of experts.</p>
        <button className="text-white p-2 w-[30%] bg-green-600 hover:bg-green-800 rounded">Chat Offline</button>

      </div>
    </div>
  );
}

export default ChatArea;
