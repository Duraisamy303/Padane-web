"use client";
import React from "react";
import Image from "next/image";
import Assets from "@/imports/assets.import";
import {
  Airplay,
  Activity,
  Heart,
  Cpu,
  Palette,
  Gamepad2,
  Dribbble,
} from "lucide-react";

const nearEvent = [
  {
    image:
      "https://secure-content.meetupstatic.com/images/classic-events/525293555/272x153.webp?w=640",
    name: "IN PERSON! Apache Kafka® x Grafana Meetup Coimbatore - Feb 2025",
    category: "Hosted by: Coimbatore Apache Kafka® Meetup by Confluent",
    time: "Sat Feb 01 2025 10:00:00 GMT+0530",
    invite: 57,
    interesr: 100,
    like: 10,
  },
  {
    image:
      "https://secure.meetupstatic.com/photos/event/5/1/1/7/event_525560759.webp?w=640",
    name: "IN PERSON! Apache Kafka® x Grafana Meetup Coimbatore - Feb 2025",
    category: "Hosted by: Coimbatore Apache Kafka® Meetup by Confluent",
    time: "Sat Feb 01 2025 10:00:00 GMT+0530",
    invite: 57,
    interesr: 100,
    like: 10,
  },
  {
    image:
      "https://secure-content.meetupstatic.com/images/classic-events/525293555/272x153.webp?w=640",
    name: "IN PERSON! Apache Kafka® x Grafana Meetup Coimbatore - Feb 2025",
    category: "Hosted by: Coimbatore Apache Kafka® Meetup by Confluent",
    time: "Sat Feb 01 2025 10:00:00 GMT+0530",
    invite: 57,
    interesr: 100,
    like: 10,
  },
  {
    image:
      "https://secure.meetupstatic.com/photos/event/5/1/1/7/event_525560759.webp?w=640",
    name: "IN PERSON! Apache Kafka® x Grafana Meetup Coimbatore - Feb 2025",
    category: "Hosted by: Coimbatore Apache Kafka® Meetup by Confluent",
    time: "Sat Feb 01 2025 10:00:00 GMT+0530",
    invite: 57,
    interesr: 100,
    like: 10,
  },
  {
    image:
      "https://secure-content.meetupstatic.com/images/classic-events/525293555/272x153.webp?w=640",
    name: "IN PERSON! Apache Kafka® x Grafana Meetup Coimbatore - Feb 2025",
    category: "Hosted by: Coimbatore Apache Kafka® Meetup by Confluent",
    time: "Sat Feb 01 2025 10:00:00 GMT+0530",
    invite: 57,
    interesr: 100,
    like: 10,
  },
  {
    image:
      "https://secure.meetupstatic.com/photos/event/5/1/1/7/event_525560759.webp?w=640",
    name: "IN PERSON! Apache Kafka® x Grafana Meetup Coimbatore - Feb 2025",
    category: "Hosted by: Coimbatore Apache Kafka® Meetup by Confluent",
    time: "Sat Feb 01 2025 10:00:00 GMT+0530",
    invite: 57,
    interesr: 100,
    like: 10,
  },
];

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


const Event_cart = ({ item }) => {
  return (
    <div className="w-full border rounded-lg shadow-sm overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="mt-2 text-gray-700">{new Date(item.time).toLocaleDateString()}</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>{item.invite} Invites</span>
          <span>{item.interesr} Interested</span>
          <span>{item.like} Likes</span>
        </div>
      </div>
    </div>
  );
};

const Category_cart = ({ item }) => (
  <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
    <div className="text-center mb-4">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.description}</p>
    </div>
  </div>
);

const Meets_up = ({ item }) => (
  <div className="flex flex-col items-start p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h2 className="text-lg font-semibold">{item.title}</h2>
    <p className="text-sm text-gray-500 mb-2">{item.subTitle}</p>
    <a href="#" className="text-blue-500 text-sm">{item.links}</a>
  </div>
);

export default function Home() {
  return (
    <div className="md:p-20">
      {/* Top Section */}
      <div className="flex w-full flex-col md:flex-row items-center md:space-x-8">
        <div className="mb-8 flex w-full items-center justify-center md:w-1/2">
          <div className="px-4 py-4 text-center md:text-left">
            <h1 className="mb-4 text-[30px] font-extrabold md:text-[40px]">
              The people platform—Where interests become friendships
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun.
            </p>
            <button className="rounded-lg bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-700">
              Join Meetup
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center md:w-1/2">
          <Image
            src={Assets.mobile_ping_1}
            alt="Mobile Ping Image"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* Events Section */}
      <div className="md:pt-10">
        <h1 className="mb-4 text-[30px] font-bold md:text-[30px]">
          Events near
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nearEvent.map((item, index) => (
            <Event_cart key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Upcoming Online Events Section */}
      <div className="md:pt-10">
        <h1 className="mb-4 text-[30px] font-bold md:text-[30px]">
          Upcoming online events
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nearEvent.map((item, index) => (
            <Event_cart key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Explore Top Categories Section */}
      <div className="md:pt-10">
        <h1 className="mb-4 text-[30px] font-bold md:text-[30px]">
          Explore top categories
        </h1>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {category.map((item, index) => (
            <Category_cart key={index} item={item} />
          ))}
        </div>
      </div>

      {/* How Meetup Works Section */}
      <div className="md:pt-10">
        <h1 className="mb-4 text-[30px] font-bold md:text-[30px]">
          How Meetup works
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {meetup.map((item, index) => (
            <Meets_up key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
