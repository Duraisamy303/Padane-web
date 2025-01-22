"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Category_cart(props: any) {
  const { item, index } = props;

  return (
    <Card
      key={index}
      className="mx-auto w-full max-w-xs rounded-lg border border-gray-300 p-0 shadow-sm transition-shadow hover:shadow-md"
    >
      <CardHeader className="flex items-center justify-center p-4">
        {item.icon}
      </CardHeader>

      <CardContent className="flex items-center justify-center p-2">
        <CardTitle className="text-center text-sm font-semibold">
          {item.name}
        </CardTitle>
      </CardContent>
    </Card>
  );
}
