import React, { useState, useEffect, useRef } from "react";

const ChatComponent = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! How can I help you?",
      sender: "ai",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const chatMessagesRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "customer" }]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const getAiReply = async (userMessage) => {
    // Replace this logic with your actual AI integration (API call, model inference, etc.)
    return "Thanks for your message! We'll get back to you soon.";
  };

  const handleAiReply = async () => {
    const aiReply = await getAiReply(newMessage);
    setMessages([...messages, { text: aiReply, sender: "ai" }]);
  };

  useEffect(() => {
    if (
      messages.length > 1 &&
      messages[messages.length - 1].sender === "customer"
    ) {
      handleAiReply();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  useEffect(() => {
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-component bg-white border border-gray-300 rounded p-4 shadow-md fixed bottom-4 right-4 w-96">
      <div className="flex justify-between items-center bg-gray-800 text-white p-4 mb-4 rounded-t">
        <h3 className="text-xl font-semibold">Customer Support</h3>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          Close
        </button>
      </div>
      <div
        className="chat-messages overflow-y-auto max-h-40 flex-shrink-1"
        ref={chatMessagesRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "customer"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } p-3 mb-2 rounded ${
              message.sender === "customer"
                ? "ml-auto max-w-[70%]"
                : "mr-auto max-w-[70%]"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input mt-4 flex">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 p-3 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-6 py-3 rounded-r hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
