"use client";
import React from "react";
import Navbar from "@/common_components/nav";
import Home from "@/common_components/nav";
import { Calendar } from "@/components/ui/calendar";
import { useSetState } from "@/utils/functions.utils";

export default function Homes() {
  const [state, setState] = useSetState({});
  return (
    <div className="container h-screen w-full p-4 md:p-10">
      <div>
        <h1 className="mb-4 text-[30px] font-extrabold md:text-[40px]">
          Welcome, Alaguraj 👋
        </h1>
        <h1 className="mb-4 text-[15px] font-semibold md:text-[25px]">
          Events from your groups
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-gray-100 p-4 md:col-span-1 items-center justify-center">
          <Calendar
            mode="single"
            selected={state.date}
            onSelect={(e) => setState({ setDate: e })}
            className="rounded-md  w-full"
          />
        </div>
        <div className="bg-gray-200 p-4 md:col-span-2">
          <h2 className="text-xl font-semibold">Right Content</h2>
          <p>
            This section takes 1/3 of the grid on larger screens and full width
            on smaller screens.
          </p>
        </div>
      </div>
    </div>
  );
}
