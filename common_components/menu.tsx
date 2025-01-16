"use client";
import Navbar from "@/common_components/nav";
import React, { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu(props: any) {
  const { handleTabClick } = props;
  const tabs = ["Filter", "All Events", "Wall"];
  const [search, setSearch] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (item: string) => {
    if (item === "Filter") {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
    handleTabClick(item);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div className="mt-2 w-full bg-white px-4 py-2 shadow dark:bg-gray-900 md:px-8">
      <div className="flex items-center  justify-between">
        <Tabs defaultValue="filter " className="">
          <TabsList className="flex gap-4 bg-white md:gap-8">
            {tabs.map((item, index) => (
              <TabsTrigger
                key={index}
                value={item.toLowerCase()}
                onClick={() => handleClick(item)}
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="lg-flex hidden items-center gap-1 md:flex">
          <div className="w-full">6 following</div>
          <div className="w-full">7 followers</div>

          <div className="relative w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full  border p-2 "
            />
            {search && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3  top-2 text-gray-500"
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
