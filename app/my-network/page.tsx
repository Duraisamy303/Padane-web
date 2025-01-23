"use client";

import Navbar from "@/common_components/nav";
import React, { useEffect } from "react";
import Link from "next/link";
import Menu from "@/common_components/menu";
import { useSetState } from "@/utils/functions.utils";
import Assets from "@/imports/assets.import";
import User_cart from "@/common_components/user_cart";
import Models from "@/imports/models.import";

const sampleData = [
  {
    id: 1,
    avatar: Assets.mobile_ping_1,
    username: "User 1",
    followers: 10,
    following: 20,
  },
  {
    id: 2,
    avatar: Assets.mobile_ping_1,
    username: "User 2",
    followers: 15,
    following: 25,
  },
  {
    id: 3,
    avatar: Assets.mobile_ping_1,
    username: "User 3",
    followers: 30,
    following: 40,
  },
  {
    id: 4,
    avatar: Assets.mobile_ping_1,
    username: "User 4",
    followers: 50,
    following: 60,
  },
  {
    id: 5,
    avatar: Assets.mobile_ping_1,
    username: "User 5",
    followers: 70,
    following: 80,
  },
  {
    id: 6,
    avatar: Assets.mobile_ping_1,
    username: "User 6",
    followers: 90,
    following: 100,
  },
  {
    id: 7,
    avatar: Assets.mobile_ping_1,
    username: "User 6",
    followers: 90,
    following: 100,
  },
  {
    id: 8,
    avatar: Assets.mobile_ping_1,
    username: "User 6",
    followers: 90,
    following: 100,
  },
  {
    id: 9,
    avatar: Assets.mobile_ping_1,
    username: "User 6",
    followers: 90,
    following: 100,
  },
  {
    id: 10,
    avatar: Assets.mobile_ping_1,
    username: "User 6",
    followers: 90,
    following: 100,
  },
  {
    id: 11,
    avatar: Assets.mobile_ping_1,
    username: "User 7",
    followers: 90,
    following: 100,
  },
  {
    id: 12,
    avatar: Assets.mobile_ping_1,
    username: "User 8",
    followers: 90,
    following: 100,
  },
];

export default function Index() {
  const [state, setState] = useSetState({
    activeTab: "Following",
  });

  useEffect(() => {
    getDate();
  }, []);

  const getDate = async () => {
    try {
      const body = {
        name: "",
        skill: [],
        skill_category: [],
        location: [],
        people_type: [],
      };
      const res = await Models.MyNetwork.list(body);
      console.log("res: ", res);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const tabs = ["Following", "Followers", "All People"];

  return (
    <div className="h-screen w-full">
      <Navbar />
      <Menu
        tabs={tabs}
        handleTabClick={(item: any) => {
          setState({ activeTab: item });
        }}
      />

      <div className="p-4">
        <div className="grid grid-cols-1 gap-3 px-4 sm:grid-cols-2 lg:grid-cols-6 lg:px-20">
          {sampleData.map((item) => (
            <User_cart item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
