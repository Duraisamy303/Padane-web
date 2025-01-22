"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  MailIcon,
  MailMinus,
  MailOpen,
  MailQuestion,
  MailWarning,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  items?: { label: string; icon?: React.ReactNode; href: string }[];
  className?: string;
  onSelectCategory?: (category: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onSelectCategory = () => {}, // Default function to prevent errors
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("received");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const invitation = [
    { id: 1, name: "Received", icon: <MailOpen /> },
    { id: 2, name: "Accepted", icon: <MailIcon /> },
    { id: 3, name: "Rejected", icon: <MailMinus /> },
    { id: 4, name: "Pending", icon: <MailQuestion /> },
  ];

  const interest = [
    { id: 1, name: "Sent", icon: <MailWarning /> },
    { id: 2, name: "Accepted", icon: <MailIcon /> },
    { id: 3, name: "Rejected", icon: <MailIcon /> },
    { id: 4, name: "Pending", icon: <MailIcon /> },
  ];

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    onSelectCategory(category); // Call the function passed from the parent
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        className={`lg:hidden p-3 fixed  z-50 rounded-md ${isOpen? " left-[200px]":"left-4"}`}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-white " />
        ) : (
          <MenuIcon className="w-6 h-6 " />
        )}
      </button>

      {/* Sidebar */}
     
      <aside
        className={cn(
         "h-screen w-64 2xl:w-64  xl:w-32 lg:w-32  md:w-64 bg-gray-800 lg:bg-transparent text-white lg:text-black  space-y-6  fixed  lg-top-none left-0 z-40 transform transition-transform lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <nav className="px-4 py-6">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-400">Invitation</h3>
            <ul className="mt-2 space-y-2">
              {invitation.map((item) => (
                <li
                  key={item.id}
                  className={`flex items-center space-x-4 p-2 rounded-md hover:bg-gray-700 cursor-pointer ${
                    selectedCategory === item.name ? "bg-gray-700" : ""
                  }`}
                  onClick={() => handleCategoryClick(item.name)}
                >
                  <span className="text-gray-400">{item.icon}</span>
                  <span className="text-black hover:text-white">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-400 mt-5">Interest</h3>
            <ul className="mt-2 space-y-2">
              {interest.map((item) => (
                <li
                  key={item.id}
                  className={`flex items-center space-x-4 p-2 rounded-md hover:bg-gray-700  cursor-pointer ${
                    selectedCategory === item.name ? "bg-gray-700" : ""
                  }`}
                  onClick={() => handleCategoryClick(item.name)}
                >
                  <span className="text-gray-400">{item.icon}</span>
                  <span className="lg:text-black  hover:text-white">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

