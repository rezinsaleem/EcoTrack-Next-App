"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessagesSquareIcon,
  ChevronsDown,
  SendHorizontal,
} from "lucide-react";

const ChatWidget = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const widgetRef = useRef(null); // 🔧 used to detect outside click

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", content: userMessage },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
    setUserMessage("");
    setLoading(false);
  };

  // 🔧 Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 p-3.5 bg-gradient-to-l from-red-400 to-red-600 text-white rounded-full shadow-lg focus:outline-none"
        >
          <MessagesSquareIcon className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div
          ref={widgetRef}
          className="fixed bottom-0 right-0 w-full h-screen md:bottom-4 md:right-4 md:w-[300px] lg:w-[600px] md:h-[85vh] bg-black/30 dark:bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-1 flex flex-col z-50" // 🔧 full screen mobile
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between bg-gradient-to-l from-red-400 to-red-600 text-white rounded-md p-5 mb-4"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg font-semibold">SoftBot</span>
            <button className="text-2xl font-bold text-white">
              <ChevronsDown className="w-6 h-6" />
            </button>
          </div>

          {/* Chat History */}
          <div className="overflow-y-auto flex-1 mb-4 pr-2 relative">
            {chatHistory.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-center text-gray-50 opacity-50 px-4 text-sm">
                <p>
                  👋 Welcome! Try these keywords to start: <br />
                  <strong>hello, contact, testimonial, secure</strong>
                </p>
              </div>
            )}
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.role === "user"
                    ? "bg-blue-100 text-blue-500"
                    : "bg-green-100 text-green-500"
                } p-3 rounded-lg`}
              >
                <div className="text-xs text-gray-500 font-lora">
                  {msg.role === "user" ? "You" : "Assistant"}
                </div>
                <div>
                  <strong>{msg.role === "user" ? "You" : "Assistant"}:</strong>
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Field and Send Button */}
          <form onSubmit={handleSubmit} className="flex items-center p-2 m-3 rounded-lg">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 p-3 border rounded-md focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="ml-2 p-3 text-white rounded-md bg-gradient-to-l from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 focus:outline-none"
            >
              {loading ? "Loading..." : <SendHorizontal className="w-6 h-6" />}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
