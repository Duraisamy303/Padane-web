"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  MailIcon,
  MailMinus,
  MailOpen,
  MailQuestion,
  MailWarning,
} from "lucide-react";

interface SidebarProps {
  items?: { label: string; icon?: React.ReactNode; href: string }[];
  className?: string;
  onSelectCategory?: (category: string) => void;
  ontoggle: any;
  invitation: any;
  interested: any;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onSelectCategory = () => {}, // Default function to prevent errors
  className,
  ontoggle,
  invitation,
  interested,
}) => {
  const [isOpen, setIsOpen] = useState(ontoggle);
  const [selectedCategory, setSelectedCategory] = useState("received");

  const toggleSidebar = () => {
    setIsOpen(!ontoggle);
  };

  const invitationMenu = [
    {
      id: 1,
      name: "Received",
      icon: <MailOpen />,
      count: invitation.received.length,
    },
    {
      id: 2,
      name: "Accepted",
      icon: <MailIcon />,
      count: invitation.accepted.length,
    },
    {
      id: 3,
      name: "Rejected",
      icon: <MailMinus />,
      count: invitation.rejected.length,
    },
    {
      id: 4,
      name: "Pending",
      icon: <MailQuestion />,
      count: invitation.pending.length,
    },
  ];

  const interestMenu = [
    {
      id: 1,
      name: "Sent",
      icon: <MailWarning />,
      count: interested.sent.length,
    },
    {
      id: 2,
      name: "Accepted",
      icon: <MailIcon />,
      count: interested.accepted.length,
    },
    {
      id: 3,
      name: "Rejected",
      icon: <MailIcon />,
      count: interested.rejected.length,
    },
    {
      id: 4,
      name: "Pending",
      icon: <MailIcon />,
      count: interested.pending.length,
    },
  ];

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    onSelectCategory(category); // Call the function passed from the parent
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      {/* <button
        className={`lg:hidden p-3 fixed  z-50 rounded-md ${isOpen? " left-[200px]":"left-4"}`}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-white " />
        ) : (
          <MenuIcon className="w-6 h-6 " />
        )}
      </button> */}

      {/* Sidebar */}

      <aside
        className={cn(
          "lg-top-none fixed left-0 z-40 h-screen  w-64  transform  space-y-6 bg-white text-black transition-transform md:w-64 lg:h-auto lg:translate-x-0 lg:bg-transparent",
          ontoggle ? " translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        <nav className="px-4 py-6">
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-400">Invitation</h3>
            <ul className="mt-2 space-y-2">
              {invitationMenu.map((item) => (
                <li
                  key={item.id}
                  className={`flex cursor-pointer items-center space-x-4 rounded-md py-2  lg:px-2 ${
                    selectedCategory === item.name ? "bg-transparent" : ""
                  }`}
                  onClick={() => {
                    handleCategoryClick(item.name);
                    toggleSidebar;
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">{item.icon}</span>
                    <div className="flex items-center justify-between gap-3">
                      <span className="lg:text-black">{item.name} </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-500 p-2 text-white ">
                        <span>{item.count} </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mt-5 text-lg font-medium text-gray-400">Interest</h3>
            <ul className="mt-2 space-y-2">
              {interestMenu.map((item) => (
                <li
                  key={item.id}
                  className={`flex cursor-pointer items-center space-x-4 rounded-md   py-2 
                    ${selectedCategory === item.name ? "bg-transparent" : ""}
                    `}
                  onClick={() => handleCategoryClick(item.name)}
                >
                 <div className="flex items-center gap-2">
                    <span className="text-gray-400">{item.icon}</span>
                    <div className="flex items-center justify-between gap-3">
                      <span className="lg:text-black">{item.name} </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-500 p-2 text-white ">
                        <span>{item.count} </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {ontoggle && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};
