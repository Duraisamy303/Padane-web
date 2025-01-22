"use client";
import Navbar from "@/common_components/nav";
import React, { useEffect, useState } from "react";
import RootLayout from "./layout";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Menu from "@/common_components/menu";
import Sidebar from "@/common_components/sidebar";
import { useSetState } from "@/utils/functions.utils";
import Combobox from "@/common_components/dropdown";
import Home from "./home/page";

export default function Index() {
  const [state, setState] = useSetState({
    acitveTab: 0,
    isSidebarOpen: false,
    search: "",
  });

  useEffect(() => {}, []);


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
      <Home />
    </div>
  );
}
