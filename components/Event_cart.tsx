"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Assets from "@/imports/assets.import";
import {
  CalendarDays,
  MessageSquareHeart,
  ThumbsUp,
  UserRoundPlus,
} from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";

export default function Event_cart(props: any) {
  const { item, index } = props;
  return (
    <Card key={index} className="w-full border rounded-lg shadow-sm overflow-hidden ">
      <CardHeader className="border-none p-0">
        <img
          src={item.image}
          alt={item.name}
          width={300}
          height={200}
          className="h-[200px] w-full"
        />
      </CardHeader>
      <CardContent className="p-2">
        <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {item.category}
        </CardDescription>
        <div className="flex items-center gap-2 py-2">
          <CalendarDays className="h-5 w-5" />
          <span>{moment(item.time).format("DD MMM YYYY")}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex w-full items-center justify-between gap-2 px-5 py-3">
            <span>
              <UserRoundPlus /> {item.invite}
            </span>
            <span>
              <MessageSquareHeart /> {item.interesr}
            </span>
            <span>
              <ThumbsUp /> {item.like}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
