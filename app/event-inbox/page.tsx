"use client";
import Navbar from "@/common_components/nav";
import React, { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";


import Menu from "@/common_components/menu";
// import Sidebar from "@/app/examples/music/components/sidebar";
import { useSetState } from "@/utils/functions.utils";
import Sidebar from "./components/sidebar";
import { MailIcon } from "lucide-react";
import { TabSection } from "./components/tabs";
import ChatOption from "./components/chatbox";



export default function Index() {

  const [state,setState]=useSetState({
    acitveTab:0
  })



  // const [selectedCategory, setSelectedCategory] = useState<string>("Received");
  // const handleSelectCategory = (category: string) => {
  //   setSelectedCategory(category);
  // };

  const [selectedCategory, setSelectedCategory] = useState("received");

  const handleCategorySelection = (category) => {
    setSelectedCategory(category); // Update the state with the selected category
  };



  return (
    <div className="h-screen w-full flex flex-col">
    {/* Navbar */}
    <div className="w-full">
      <Navbar />
    </div>

    {/* Main Content: Sidebar, TabSection, and ChatOption */}
    <div className="flex flex-wrap w-full h-full">
  {/* Sidebar */}
  <div className="hidden lg:block lg:w-1/6" style={{ border: "1px solid grey" }}>
    <Sidebar onSelectCategory={handleCategorySelection} />
  </div>

  {/* TabSection */}
  <div className="w-full lg:w-2/6" style={{ border: "1px solid grey" }}>
    <TabSection selectedCategory={selectedCategory} />
  </div>

  {/* ChatOption */}
  <div className=" w-full lg:w-3/6 border-t border-gray-500" >
    {/* <ChatOption /> */}
    <ChatOption/>
  </div>
</div>

  </div>
  

  );
}
