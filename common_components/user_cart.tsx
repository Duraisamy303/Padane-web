import React from "react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircleWarning, UserCheck } from "lucide-react";

export default function User_cart(props: any) {
  const { item } = props;
  return (
    <Card key={item.id} className="w-full rounded-lg bg-white shadow-md ">
      <div className="flex flex-col items-center py-3">
        <img
          src={`https://i.pravatar.cc/150?img=${item.id}`}
          alt={item.username}
          className="mb-2 h-24 w-24 rounded-full object-cover"
        />
        <p className="text-medium font-semibold">{item.username}</p>
        <p className="text-sm text-gray-500">{"Musician"}</p>
      </div>

      <div className="flex justify-evenly py-3">
        <div className="text-center">
          <p className="text-sm font-medium">Followers</p>
          <p className="text-lg font-bold">{item.followers}</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">Following</p>
          <p className="text-lg font-bold">{item.following}</p>
        </div>
      </div>
      <div className="flex justify-evenly mb-4">
        <div className="text-center">
          <UserCheck className=" h-7 w-7" />
        </div>
        <div className="text-center">
          <MessageCircleWarning className=" h-7 w-7" />
        </div>
      </div>
    </Card>
  );
}
