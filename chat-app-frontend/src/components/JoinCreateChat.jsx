import React, { useState } from "react";
import chatIcon from "../assets/chat.png";
import toast from "react-hot-toast";
import { createRoom } from "../services/RoomService";

const JoinCreateChat = () => {
  const [details, setDetails] = useState({
    roomId: "",
    userName: "",
  });

  function handleFormInputChange(event) {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  }

  function validateForm() {
    if (details.userName === "" || details.roomId === "") {
      toast.error("Please fill in all fields");
      return false;
    }
    return true;
  }

  function joinChat() {
    if (validateForm()) {
      //Join Chat
      console.log("wdad");
    }
  }

  async function handleCreateRoom() {
    if (validateForm()) {
      // Create Room
      try {
        const response = await createRoom(details.roomId);
        console.log(response);

        toast.success("Room created successfully");
        joinChat();
      } catch (error) {
        console.log(error);
        toast.error("Room can't be created");
      }
    }
  }

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
            name="userName"
            type="text"
            onChange={handleFormInputChange}
            value={details.userName}
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
            name="roomId"
            type="text"
            onChange={handleFormInputChange}
            value={details.roomId}
            placeholder="Enter room ID"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={joinChat}
            className="w-1/2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Join Room
          </button>
          <button
            onClick={handleCreateRoom}
            className="w-1/2 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateChat;
