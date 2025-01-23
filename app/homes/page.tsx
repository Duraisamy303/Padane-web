"use client";
import React from "react";
import Navbar from "@/common_components/nav";
import Home from "@/common_components/nav";
import { Calendar } from "@/components/ui/calendar";
import { useSetState } from "@/utils/functions.utils";
import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { eventsData, key_performers } from "@/utils/constant.utils";
import { Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function Homes() {
  const [state, setState] = useSetState({
    suggested: true,
  });

  return (
    <div className="container h-screen w-full p-4  ">
      <div>
        <h1 className="mb-4 text-[30px] font-extrabold md:text-[40px]">
          Welcome, Vijay 👋
        </h1>
        <h1 className="mb-4 text-[15px] font-semibold md:text-[25px]">
          Events from your groups
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="items-center justify-center  p-4 md:col-span-1">
          <Calendar
            mode="single"
            selected={state.date}
            onSelect={(e) => setState({ setDate: e })}
            className="rounded-md"
          />
          <div className="flex items-center gap-1 md:justify-around ">
            <Button className="text-white">This week</Button>
            <Button className="text-white">This weekend</Button>
            <Button className="text-white">Next week</Button>
          </div>
          <div>
            <div className="flex items-center justify-between pt-10 ">
              <h1 className="mb-4 text-[15px] font-semibold md:text-[25px]">
                Your next events
              </h1>
              <div className="mb-4 text-[15px] ">View all</div>
            </div>
            <div className="flex w-full flex-col gap-2">
              {key_performers.map((performer, index) => (
                <div
                  key={index}
                  className="flex  justify-between rounded-md border p-2"
                >
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={`https://i.pravatar.cc/150?img=${performer.id}`}
                        alt={`${performer?.name}'s avatar`}
                      />
                    </Avatar>
                    <div className="ml-2">
                      <p className="font-medium ">{performer?.name}</p>

                      <span className="text-sm text-gray-500">
                        {performer?.description}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-200 md:col-span-2">
          <div className="p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {/* Dropdown: Event/Wall */}
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="wall">Wall</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Box */}
              <div>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search events or walls..."
                  className="w-full"
                />
              </div>

              {/* Dropdown: Category */}
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="art">Art</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Suggested Events Toggle */}
              <div className="flex items-center gap-2">
                <Label htmlFor="suggested-events" className="text-sm">
                  Suggested Events
                </Label>
                <Switch
                  id="suggested-events"
                  checked={state.suggested}
                  onCheckedChange={(e) => setState({ suggested: e })}
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4">
            {eventsData.map((item, index) => (
              <Card key={index} className="mb-6 bg-gray-50 shadow-md">
                {/* Date Header */}
                <CardHeader className="border-b pb-2">
                  <CardTitle className="text-lg font-semibold">
                    {item.date}
                  </CardTitle>
                </CardHeader>

                {/* Events */}
                <CardContent className="space-y-6">
                  {item.events.map((event) => (
                    <div
                      key={event.id}
                      className={cn(
                        "flex flex-col gap-4 md:flex-row",
                        "border-b pb-4 last:border-b-0",
                      )}
                    >
                      {/* Event Image */}
                      <img
                        src={`https://i.pravatar.cc/150?img=${event.id}`}
                        alt={event.title}
                        className="w-full rounded-md md:w-1/3 lg:w-1/5"
                      />

                      {/* Event Details */}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="text-sm text-gray-600">
                          {event.description}
                        </p>
                        <div className="text-sm text-gray-500">
                          <p>📍 {event.location}</p>
                          <p>⏰ {event.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
