"use client"; // Mark this file as a client-side component

import Navbar from "@/common_components/nav";
import ChatOption from "./components/chat-box";

const WhatsAppChatApp = () => {
  return (
    <>
      <Navbar />
      <ChatOption />
    </>
  );
};

export default WhatsAppChatApp;
