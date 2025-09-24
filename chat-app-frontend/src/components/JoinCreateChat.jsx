import React from "react";
import chatIcon from "../assets/chat.png";

const JoinCreateChat = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white text-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-md">
        <div className="">
          <img src={chatIcon} alt="" className="w-24 mx-auto mb-4" />
        </div>
        <h1 className="text-2xl font-semibold text-center mb-6">
          Join / Create Room...
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Room ID */}
        <div className="mb-6">
          <label className="block mb-1 font-medium" htmlFor="roomId">
            Room ID / New Room ID
          </label>
          <input
            id="roomId"
            type="text"
            placeholder="Enter room ID"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="w-1/2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            Join Room
          </button>
          <button className="w-1/2 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateChat;
