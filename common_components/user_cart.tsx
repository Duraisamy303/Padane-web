import React from "react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function User_cart(props: any) {
  const { item } = props;
  return (
    <Card key={item.id} className="w-full rounded-lg bg-white shadow-md">
      <div className="flex flex-col items-center py-4">
        <Image
          src={item.avatar}
          alt={item.username}
          className="mb-2 h-24 w-24 rounded-full object-cover"
        />
        <p className="text-medium font-semibold">{item.username}</p>
        <p className="text-sm font-semibold">{"Musician"}</p>
      </div>

      <div className="flex justify-evenly py-2">
        <div className="text-center">
          <p className="text-sm font-medium">Followers</p>
          <p className="text-lg font-bold">{item.followers}</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">Following</p>
          <p className="text-lg font-bold">{item.following}</p>
        </div>
      </div>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" className="w-full sm:w-auto">
          Following
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          Report User
        </Button>
      </CardFooter>
    </Card>
  );
}
