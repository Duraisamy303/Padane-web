"use client";
import Navbar from "@/common_components/nav";
import React, { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu(props: any) {
  const { handleTabClick, tabs } = props;
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (item: string) => {
    handleTabClick(item);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div className="mt-2 w-full bg-white px-4 py-2 shadow dark:bg-gray-900 md:px-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
        {/* Tabs Section */}
        <Tabs defaultValue="filter">
          <TabsList className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto bg-white py-2 md:gap-8">
            {tabs.map((item: any, index: any) => (
              <TabsTrigger
                key={index}
                value={item.toLowerCase()}
                onClick={() => handleClick(item)}
                className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none md:text-base"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-4 flex  flex-col items-center justify-between gap-4 md:mt-0 md:flex-row md:justify-between md:gap-8 lg:justify-between">
          <div className="relative md:w-[200px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="rounded-md border p-2 focus:outline-none"
            />
            {search && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-2 text-gray-500"
              >
                X
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
