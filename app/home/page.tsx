"use client";
import Category_cart from "@/components/Category_cart";
import Event_cart from "@/components/Event_cart";
import {
  Airplay,
  Activity,
  Heart,
  Cpu,
  Palette,
  Gamepad2,
  Dribbble,
} from "lucide-react";

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
import Meets_up from "@/components/Meets_up";
import { nearEvent } from "@/utils/constant.utils";

export default function Home() {
  

  const category = [
    {
      name: "Travel",
      icon: <Airplay className="h-6 w-6" />,
    },
    {
      name: "Social Activities",
      icon: <Activity className="h-6 w-6" />,
    },
    {
      name: "Hobbies",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      name: "Sports",
      icon: <Dribbble className="h-6 w-6" />,
    },
    {
      name: "Health",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      name: "Technology",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      name: "Art and Culture",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      name: "Games",
      icon: <Gamepad2 className="h-6 w-6" />,
    },
  ];

  const meetup = [
    {
      title: "Discover events and groups",
      ion: "",
      subTitle: "See who's hosting local events for all the things you love",
      links: "Search events and groups",
    },
    {
      title: "Start a group to host events",
      ion: "",
      subTitle:
        "Create your own Meetup group, and draw from a community of millions",
      links: "Start a group",
    },
  ];

  return (
    <div className="container md:p-20">
      <div className="flex w-full flex-col items-center md:flex-row md:space-x-8">
        <div className="mb-8 flex w-full items-center justify-center md:w-1/2">
          <div className="px-4 py-4 text-center md:text-left">
            <h1 className="mb-4 text-[30px] font-extrabold md:text-[40px]">
              The people platform—Where interests become friendships
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              Whatever your interest, from hiking and reading to networking and
              skill sharing, there are thousands of people who share it on
              Meetup. Events are happening every day—sign up to join the fun.
            </p>
            <button className="rounded-lg bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-700">
              Join Meetup
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center md:w-1/2">
          <Image
            src={Assets.events}
            alt="Mobile Ping Image"
            height={500}
            width={500}
            className=" object-cover"
          />
        </div>
      </div>

      <div className="md:pt-10">
        <h1 className="mb-4 text-[30px] font-semibold md:text-[30px]">
          Events near
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nearEvent.map((item, index) => (
            <Event_cart key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="md:pt-10">
        <h1 className="mb-4 text-[30px] font-semibold md:text-[30px]">
          Upcoming online events
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {nearEvent.map((item, index) => (
            <Event_cart item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="pt-5 ">
        <h1 className="mb-4 text-[30px] font-semibold md:text-[30px]">
          Explore top categories
        </h1>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-8">
          {category.map((item, index) => (
            <Category_cart item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="pt-5 ">
        <h1 className="mb-4 text-[30px] font-semibold md:text-[30px]">
          How Meetup works
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {meetup.map((item, index) => (
            <Meets_up key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
