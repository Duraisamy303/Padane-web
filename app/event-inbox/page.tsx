"use client";
import Navbar from "@/common_components/nav";
import React, { useState } from "react";
import { useSetState } from "@/utils/functions.utils";
// import Sidebar from "./components/sidebar";

import { HomeIcon, MailIcon, SettingsIcon, UserIcon } from "lucide-react";
import { TabSection } from "./components/tabs";
import ChatOption from "./components/chatbox";
import { playlists } from "./data/menu";
import { Sidebar } from "./components/sidebar-copy";



export default function Index() {

  const [state,setState]=useSetState({
    acitveTab:0
  })

  const [selectedCategory, setSelectedCategory] = useState("received");

  const handleCategorySelection = (category) => {
    setSelectedCategory(category); // Update the state with the selected category
  };


  const [selectedChat, setChatCategory] = useState();
  const handleChatSelection = (chat) => {
    setChatCategory(chat); // Update the state with the selected category
  };

  const [toggle, setToggle] = useState(false);
  const ontoggle = (isOpen) => {
    setToggle(!isOpen); // Update the state with the selected category
  };

console.log(selectedChat);

 
  return (
    <div className="h-screen w-full flex flex-col">
    {/* Navbar */}
    <div className="w-full">
      <Navbar />
    </div>

    {/* Main Content: Sidebar, TabSection, and ChatOption */}
    <div className="flex align-start flex-wrap w-full ">

          {/* Sidebar */}
          {/* <div className="hidden lg:block lg:w-1/6" style={{ border: "1px solid grey" }}> */}
          <div className="lg:w-1/6" >
            {/* <Sidebar onSelectCategory={handleCategorySelection} /> */}
            <Sidebar  onSelectCategory={handleCategorySelection} ontoggle= {toggle}/>
          </div>



          {/* TabSection */}
          <div className="w-full lg:w-2/6" >
          
            <TabSection selectedCategory={selectedCategory} onSelectChat={handleChatSelection} ontoggle={ontoggle}/>
          </div>

          {/* ChatOption */}
          <div className={` w-full lg:w-3/6 border-t border-gray-500 ${selectedChat ? "block" : "hidden"}` }>
            {/* <ChatOption /> */}
             <ChatOption onSelectChat={selectedChat}/> 
          
          </div>
    </div>

  </div>
  

  );
}
