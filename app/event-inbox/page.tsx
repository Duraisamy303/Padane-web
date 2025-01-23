"use client";
import Navbar from "@/common_components/nav";
import React, { useEffect, useState } from "react";
import { useSetState } from "@/utils/functions.utils";
import { TabSection } from "./components/tabs";
import ChatOption from "./components/chatbox";
import { Sidebar } from "./components/sidebar";

export default function Index() {
  const [state, setState] = useSetState({
    activeTab: 0,
  });


   // Data arrays
   const invitation = {
    received: [
      {
        id: 1,
        from: "@Indumathi Navinkumar",
        to: "Coimbatore rocks - Received",
        message: "Hi this is artist vignesh from Coimbatore.",
      },
      {
        id: 2,
        from: "@John Doe",
        to: "Chennai vibes - Received",
        message: "Hi this is artist John from Chennai.",
      },
    ],
    accepted: [
      {
        id: 3,
        from: "@Jane Smith",
        to: "Bangalore beats - Accepted",
        message: "Hi this is artist Jane from Bangalore.",
      },
    ],
    rejected: [
      
    ],
    pending: [
      {
        id: 5,
        from: "@Bob Brown",
        to: "Mumbai magic - Pending",
        message: "Hi this is artist Bob from Mumbai.",
      },
    ],
  };

  const interested = {
    sent: [
      {
        id: 6,
        from: "@Tom Hardy",
        to: "Kolkata culture - Received",
        message: "Hi this is artist Tom from Kolkata.",
      },
    ],
    accepted: [
      {
        id: 7,
        from: "@Emma Stone",
        to: "Pune passion - Accepted",
        message: "Hi this is artist Emma from Pune.",
      },
    ],
    rejected: [
       {
      id: 7,
      from: "@Emma Stone",
      to: "Pune passion - Accepted",
      message: "Hi this is artist Emma from Pune.",
    },
  ],
    pending: [
      {
        id: 8,
        from: "@Chris Evans",
        to: "Hyderabad harmony - Pending",
        message: "Hi this is artist Chris from Hyderabad.",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("received");
  const [selectedChat, setChatCategory] = useState(null); // For ChatOption toggle
  const [isSidebarOpen, setSidebarOpen] = useState(false); // For Sidebar toggle
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  useEffect(() => {
    if (!isDrawerOpen) {
      setChatCategory(null);
    }
  }, [isDrawerOpen]);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category); // Update the state with the selected category
  };

  const handleChatSelection = (chat) => {
    setChatCategory(chat); // Update the state with the selected chat
    // if (!isDrawerOpen) {
    //   setChatCategory(null);
    // }
  };


  

  const ontoggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle the sidebar
  };

  const handleChat = (toggel) =>{
    setDrawerOpen(!toggel)
  }




  console.log("chat close",isDrawerOpen);
    console.log("selectchat",selectedChat);
  

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Content: Sidebar, TabSection, and ChatOption */}
      <div className="flex align-start flex-wrap w-full relative">
        <div
          className={`lg:w-1/6 fixed lg:relative top-0 left-0 h-full bg-white z-20 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <Sidebar
            onSelectCategory={handleCategorySelection}
            ontoggle={isSidebarOpen}
            invitation={invitation}
            interested={interested}
          />
        </div>

        {/* TabSection */}
        <div className="w-full lg:w-2/6">
          <TabSection
            selectedCategory={selectedCategory}
            onSelectChat={handleChatSelection}
            ontoggle={ontoggleSidebar}
            invitation={invitation}
            interested={interested}

          />
        </div>

        {/* ChatOption */}
        <div
          className={`right-0 h-full lg:h-auto bg-white border-gray-500 border-t lg:border-none transition-transform duration-500 ease-in-out ${
            selectedChat ? "lg:relative fixed translate-x-0 top-[50px] lg:top-0" : "hidden translate-x-full"
          } w-full lg:w-3/6`}
        >
          <ChatOption onSelectChat={selectedChat} closeChat={handleChat} />
        </div>
      </div>
    </div>
  );
}