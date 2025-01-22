"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Utility to combine class names
import { MenuIcon, XIcon } from "lucide-react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

interface SidebarProps {
  items: { label: string; icon?: React.ReactNode; href: string }[];
  className?: string;
  onItemClick?: (href: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  className,
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden p-3 text-gray-200 bg-gray-800 fixed top-4 left-4 z-50 rounded-md"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-gray-800 text-white w-64 h-screen p-4 space-y-6 fixed top-0 left-0 z-40 transform transition-transform lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <div className="text-2xl font-bold text-center py-4">Dashboard</div>
        <nav>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    onItemClick?.(item.href);
                    setIsOpen(false); // Close sidebar after click
                  }}
                  className="flex w-full items-center gap-3 px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md transition"
                >
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};
