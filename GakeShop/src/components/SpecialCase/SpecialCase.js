// SpecialCase.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoChatboxEllipses } from "react-icons/io5";
import { useSelector } from "react-redux";
import { MdSwitchAccount } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import ChatComponent from "../../chatComponent/chatComponent";

const SpecialCase = () => {
  const products = useSelector((state) => state.gakeReducer.products);
  const [showChat, setShowChat] = useState(false);
  const chatBoxRef = useRef(null);

  const handleChatClick = () => {
    setShowChat(!showChat);
  };

  useEffect(() => {
    if (showChat) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [showChat]);

  return (
    <div className="fixed top-52 right-2 z-20 md:flex flex-col gap-2">
    <Link to="/signin">
    <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
      <div className="flex justify-center items-center">
        <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
        <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
      </div>
      <p className="text-xs font-semibold font-titleFont">Profile</p>
    </div>
  </Link>
  <Link to="/cart">
    <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
      <div className="flex justify-center items-center">
        <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
        <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
      </div>
      <p className="text-xs font-semibold font-titleFont">Buy Now</p>
      {products.length > 0 && (
        <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
          {products.length}
        </p>
      )}
    </div>
  </Link>

      <div
        className="chat-box bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
        onClick={handleChatClick}
        ref={chatBoxRef}
      >
        <div className="flex justify-center items-center">
          <IoChatboxEllipses className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <IoChatboxEllipses className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p className="text-xs font-semibold font-titleFont">Chat Box</p>
      </div>

      {showChat && <ChatComponent onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default SpecialCase;
