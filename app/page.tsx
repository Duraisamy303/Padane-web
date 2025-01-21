"use client";
import Navbar from "@/common_components/nav";
import React, { useState } from "react";
import RootLayout from "./layout";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Menu from "@/common_components/menu";
import Sidebar from "@/common_components/sidebar";
import { useSetState } from "@/utils/functions.utils";
import Combobox from "@/common_components/dropdown";

export default function Index() {
  const [state, setState] = useSetState({
    acitveTab: 0,
  });
  const [search, setSearch] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClearSearch = () => {
    setSearch("");
  };
  const tabs = ["Filter", "All Events", "Wall"];

  const options = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Menu
        tabs={tabs}
        handleTabClick={(item: any) => {
          if (item == "Filter") {
            setIsSidebarOpen(!isSidebarOpen);
          }
        }}
      />

      <div className="flex flex-grow">
        {/* Left Sidebar */}
        {isSidebarOpen && (
          <div className="h-full w-1/5 bg-gray-100 p-4 shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Filter </h2>
              <h2 className="text-lg font-medium">Reset </h2>
            </div>
            <div className="relative w-full pt-5">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="w-full  border p-2  "
              />
              {search && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-7  text-gray-500"
                >
                  X
                </button>
              )}
            </div>
            <div className="pt-3">
              <label className="block text-sm font-medium">Ty</label>
              <Combobox
                onChange={() => {}}
                options={options}
                selectedValues={[]}
                isMulti={false}
                placeholder="Select Location"
              />
            </div>
            <div className="pt-3">
              <label className="block text-sm font-medium">Location</label>
              <Combobox
                onChange={() => {}}
                options={options}
                selectedValues={[]}
                isMulti={false}
                placeholder="Select Location"
              />
            </div>
          </div>
        )}

        {/* Center Section */}
        <div
          className={`flex flex-wrap ${
            isSidebarOpen ? "w-1/3" : "w-2/3"
          } gap-4 p-4`}
        >
          <div className="w-full rounded bg-white p-4 shadow md:w-1/2 lg:w-1/3">
            <h3 className="font-bold">Card 1</h3>
            <p>Details about Card 1</p>
          </div>
          <div className="w-full rounded bg-white p-4 shadow md:w-1/2 lg:w-1/3">
            <h3 className="font-bold">Card 2</h3>
            <p>Details about Card 2</p>
          </div>
          {!isSidebarOpen && (
            <div className="w-full rounded bg-white p-4 shadow md:w-1/2 lg:w-1/3">
              <h3 className="font-bold">Card 3</h3>
              <p>Details about Card 3</p>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4">
          <h2 className="text-lg font-bold">Recommended Users</h2>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
          </ul>
        </div>
      </div>

      {/* <Sidebar open={isSidebarOpen} close={() => setIsSidebarOpen(false)} /> */}
    </div>
  );
}
