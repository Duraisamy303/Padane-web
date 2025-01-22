

"use client";

import React from "react";

import { Sidebar } from "./component/sidebar";
import { HomeIcon, SettingsIcon, UserIcon } from "lucide-react";

const items = [
  { label: "Home", icon: <HomeIcon className="w-5 h-5" />, href: "/home" },
  { label: "Profile", icon: <UserIcon className="w-5 h-5" />, href: "/profile" },
  { label: "Settings", icon: <SettingsIcon className="w-5 h-5" />, href: "/settings" },
];

const App = () => {
  const handleItemClick = (href: string) => {
    console.log("Navigating to:", href);
  };

  return (
    <div className="flex">
      <Sidebar items={items} onItemClick={handleItemClick} />
     
    </div>
  );
};

export default App;
