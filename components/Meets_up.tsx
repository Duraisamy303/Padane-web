"use client";
import React from "react";
import { Search, Plus } from "lucide-react"; // Importing the icons from lucide-react

export default function Meets_up(props: any) {
  const { item, index } = props;

  return (
    <div className="flex   items-start p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center pt-1">
        {index % 2 === 0 ? (
          <Search className="h-10 w-10 text-gray-600" />
        ) : (
          <Plus className="h-10 w-10 text-gray-600" />
        )}
      </div>
      <div className="p-1 flex flex-col gap-3 pl-4">
      <h2 className="text-xl font-bold text-left">{item.title}</h2>

      <p className="text-lg text-wrap text-gray-500  text-left px-0">{item.subTitle}</p>

      <a href="#" className="text-blue-500 text-sm text-left px-0">{item.links}</a>
      </div>
    </div>
  );
}
