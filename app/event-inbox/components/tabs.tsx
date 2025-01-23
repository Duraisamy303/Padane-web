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

export const TabSection = ({ selectedCategory, onSelectChat,ontoggle,invitation,interested }) => {
 

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
      {/* <TabsList className="flex justify-evenly w-full">
       
        <TabsTrigger value="invitation">Invitation</TabsTrigger>
        <TabsTrigger value="interested">Interested</TabsTrigger>
      </TabsList> */}
      

      <div className={`flex items-center justify-between lg:justify-end mt-4 mx-3`}>
      <button
        className={`lg:hidden p-3  rounded-md ${isOpen? " fixed left-[200px] top-3 z-50":" left-4"}`}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-grey " />
        ) : (
          <MenuIcon className="w-6 h-6 text-grey " />
        )}
      </button>
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




