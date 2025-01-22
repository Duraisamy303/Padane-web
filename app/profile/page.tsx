"use client";
import Navbar from "@/common_components/nav";
import React, { useState } from "react";
import RootLayout from "../layout";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Menu from "@/common_components/menu";
import Sidebar from "@/common_components/sidebar";
import { useSetState } from "@/utils/functions.utils";
import ProfileLayout from "./components/ProfileLayout";

export default function MyProfile() {
  const [state, setState] = useSetState({
    acitveTab: 0,
  });
  const [search, setSearch] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClearSearch = () => {
    setSearch("");
  };
  const tabs = ["Filter", "All Events", "Wall"];
  return (
    <div className="h-screen w-full">
      <Navbar />
      {/* <Menu
        tabs={tabs}
        handleTabClick={(item: any) => {
          if (item == "Filter") {
            setIsSidebarOpen(true);
          }
        }}
      /> */}

      {/* <Sidebar open={isSidebarOpen} close={() => setIsSidebarOpen(false)} /> */}
      <ProfileLayout />
    </div>
  );
}
