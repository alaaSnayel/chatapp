import React, { useEffect, useRef, useState } from "react";
import {
  MdAttachFile,
  MdDarkMode,
  MdOutlineWbSunny,
  MdSend,
} from "react-icons/md";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      content: "Hello",
      sender: "Aliaa",
    },
    {
      content: "Hello",
      sender: "Aliaa",
    },
    {
      content: "Hello",
      sender: "Alaa",
    },
    {
      content: "Hellorrrrrrrrrrrrrrrrr",
      sender: "Aliaa",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);
  const [stompClient, setStompClient] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-950 dark:text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-blue-500 text-white text-xl font-semibold shadow">
        <p className="text-sm sm:text-base">
          Room: <span className="font-bold">64165</span>
        </p>

        <h2 className="text-lg sm:text-xl font-semibold">
          User: <span>Alaa Sayed</span>
        </h2>
        <div className="flex gap-4">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-blue-300 text-yellow-500 rounded-full hover:text-yellow-600 transition"
          >
            {darkMode ? (
              <MdOutlineWbSunny size={24} />
            ) : (
              <MdDarkMode size={24} />
            )}
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base cursor-pointer px-4 py-2 rounded-md">
            Leave Room
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <main className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message, index) => {
          const isMine = message.sender === "Alaa";

          return (
            <div
              key={index}
              className={`flex items-end gap-2 ${
                isMine ? "justify-end" : "justify-start"
              }`}
            >
              {!isMine && (
                <img
                  src="https://avatar.iran.liara.run/public/39"
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
              )}

              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  isMine
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
                }`}
              >
                {!isMine && (
                  <p className="text-xs font-semibold mb-1">{message.sender}</p>
                )}
                <p>{message.content}</p>
              </div>
            </div>
          );
        })}
      </main>

      {/* Input Area */}
      <footer className="p-4 bg-white dark:bg-gray-900">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-12 py-3 rounded-full border border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
            />
            <button
              type="button"
              className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:bg-gray-800 hover:text-white rounded-full p-2 dark:hover:text-gray-100"
            >
              <MdAttachFile size={24} />
            </button>
          </div>

          <button className="w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full cursor-pointer">
            <MdSend size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;
