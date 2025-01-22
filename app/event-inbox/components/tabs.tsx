


import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuIcon, StarIcon, XIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TabSection = ({ selectedCategory, onSelectChat,ontoggle }) => {
  // Data arrays
  const invitation = {
    received: [
      {
        id: 1,
        from: "@Indumathi Navinkumar",
        to: "Coimbatore rocks - Received",
        message: "Hi this is artist vignesh from Coimbatore.",
      },
      {
        id: 2,
        from: "@John Doe",
        to: "Chennai vibes - Received",
        message: "Hi this is artist John from Chennai.",
      },
    ],
    accepted: [
      {
        id: 3,
        from: "@Jane Smith",
        to: "Bangalore beats - Accepted",
        message: "Hi this is artist Jane from Bangalore.",
      },
    ],
    rejected: [
      {
        id: 4,
        from: "@Alice Walker",
        to: "Delhi dreams - Rejected",
        message: "Hi this is artist Alice from Delhi.",
      },
    ],
    pending: [
      {
        id: 5,
        from: "@Bob Brown",
        to: "Mumbai magic - Pending",
        message: "Hi this is artist Bob from Mumbai.",
      },
    ],
  };

  const interested = {
    received: [
      {
        id: 6,
        from: "@Tom Hardy",
        to: "Kolkata culture - Received",
        message: "Hi this is artist Tom from Kolkata.",
      },
    ],
    accepted: [
      {
        id: 7,
        from: "@Emma Stone",
        to: "Pune passion - Accepted",
        message: "Hi this is artist Emma from Pune.",
      },
    ],
    rejected: [],
    pending: [
      {
        id: 8,
        from: "@Chris Evans",
        to: "Hyderabad harmony - Pending",
        message: "Hi this is artist Chris from Hyderabad.",
      },
    ],
  };

  const filterMenu = ["All", "Received", "Accepted", "Rejected", "Pending"];

  const [selectedTab, setSelectedTab] = useState("invitation");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectCard, setSelectCard] = useState("");

  const normalizedCategory = selectedCategory?.toLowerCase();

  const getData = () => {
    const data =
      selectedTab === "invitation"
        ? invitation[normalizedCategory] || []
        : interested[normalizedCategory] || [];

    // Apply additional filter based on dropdown
    if (selectedFilter === "All") {
      return data;
    }
    return data.filter((item) =>
      item.to.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  };

  const handleChatClick = (chat) => {
    setSelectCard(chat);
    onSelectChat(chat);
  };

  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    ontoggle(isOpen)
  };

  return (
    <Tabs defaultValue="invitation" onValueChange={setSelectedTab}>
      <TabsList className="flex justify-evenly w-full">
      <button
        className={`lg:hidden p-3   z-50 rounded-md ${isOpen? " fixed left-[200px]":" left-4"}`}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-white " />
        ) : (
          <MenuIcon className="w-6 h-6 " />
        )}
      </button>
        <TabsTrigger value="invitation">Invitation</TabsTrigger>
        <TabsTrigger value="interested">Interested</TabsTrigger>
      </TabsList>

      <div className="flex items-center justify-end mt-4 mx-3">
        <Select onValueChange={(value) => setSelectedFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {filterMenu.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <TabsContent value="invitation" className="p-3">
        {getData().length > 0 ? (
          getData().map((item) => (
            <Card
              className="w-full mt-5"
              key={item.id}
              onClick={() => handleChatClick(item.id)}
            >
              <CardHeader>
                <CardDescription>Invite From: {item.from}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <StarIcon className="text-sm" />
                  <a href="#">
                    <p className="underline">{item.to}</p>
                  </a>
                </div>
                <CardDescription className="mt-5">{item.message}</CardDescription>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="w-full">
            <CardTitle className="m-5">No records found</CardTitle>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="interested" className="p-3">
        {getData().length > 0 ? (
          getData().map((item) => (
            <Card
              className="w-full mt-5"
              key={item.id}
              onClick={() => handleChatClick(item)}
            >
              <CardHeader>
                <CardDescription>Invite From: {item.from}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <StarIcon className="text-sm" />
                  <a href="#">
                    <p className="underline">{item.to}</p>
                  </a>
                </div>
                <CardDescription className="mt-5">{item.message}</CardDescription>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="w-full">
            <CardTitle className="m-5">No records found</CardTitle>
          </Card>
        )}
      </TabsContent>
    </Tabs>
  );
};




