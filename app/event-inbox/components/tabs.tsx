import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuIcon, StarIcon, XIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

export const TabSection = ({ selectedCategory, onSelectCategory = () => {}, }) => {
  // Data arrays
  const invitation = {
    received: [
      { id:1, from: "@Indumathi Navinkumar", to: "Coimbatore rocks - Received", message: "Hi this is artist vignesh from Coimbatore." },
      {id:2, from: "@John Doe", to: "Chennai vibes - Received", message: "Hi this is artist John from Chennai." },
    ],
    accepted: [
      { id:3,from: "@Jane Smith", to: "Bangalore beats - Accepted", message: "Hi this is artist Jane from Bangalore." },
    ],
    rejected: [
      { id:4,from: "@Alice Walker", to: "Delhi dreams - Rejected", message: "Hi this is artist Alice from Delhi." },
    ],
    pending: [
      { id:5,from: "@Bob Brown", to: "Mumbai magic - Pending", message: "Hi this is artist Bob from Mumbai." },
    ],
  };

  const interested = {
    received: [
      { from: "@Tom Hardy", to: "Kolkata culture - Received", message: "Hi this is artist Tom from Kolkata." },
    ],
    accepted: [
      { from: "@Emma Stone", to: "Pune passion - Accepted", message: "Hi this is artist Emma from Pune." },
    ],
    rejected: [],
    pending: [
      { from: "@Chris Evans", to: "Hyderabad harmony - Pending", message: "Hi this is artist Chris from Hyderabad." },
    ],
  };

  const [selectedTab, setSelectedTab] = useState("invitation");
  const [selectCard, setSelectCard ] = useState("")
  const [filter, setFilter] = useState("All");

  const normalizedCategory = selectedCategory?.toLowerCase();
  const dropDownFiter = filter?.toLowerCase();

  const getData = () => {
    const data =
      selectedTab === "invitation"
        ? invitation[normalizedCategory] || invitation[dropDownFiter]
        : interested[normalizedCategory] || interested[dropDownFiter];

    

    if (filter === "All") return data;
    return data.filter((item) => item.to.toLowerCase().includes(filter.toLowerCase()));
  };


  console.log(selectCard);

  const handleChatClick = (chat: any) => {
    setSelectCard(chat);
    onSelectCategory(chat); 
  };


  return (
    <Tabs defaultValue="invitation" onValueChange={setSelectedTab}>
       

      <TabsList className="flex justify-evenly w-full">
        <TabsTrigger value="invitation">Invitation</TabsTrigger>
        <TabsTrigger value="interested">Interested</TabsTrigger>
      </TabsList>

      <div className="flex items-center justify-end mt-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="bg-gray-100 p-2 rounded cursor-pointer flex">
              Sort By
              {/* <DotsVerticalIcon className="h-5 w-5 text-gray-700" /> */}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 bg-gray-100 p-4 rounded" align="end">
            <DropdownMenuItem className="cursor-pointer hover:text-black hover:border-white border-transparent" onSelect={() => setFilter("All")}>All</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-black hover:border-white border-transparent" onSelect={() => setFilter("Received")}>Received</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-black hover:border-white border-transparent" onSelect={() => setFilter("Accepted")}>Accepted</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-black hover:border-white border-transparent" onSelect={() => setFilter("Rejected")}>Rejected</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-black hover:border-white border-transparent" onSelect={() => setFilter("Pending")}>Pending</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <TabsContent value="invitation" className="p-3">
        {getData().length > 0 ? (
          getData().map((item, index) => (
            <Card className="w-full mt-5" key={index}   onClick={() => handleChatClick(item.id)}>
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
          getData().map((item, index) => (
            <Card className="w-full mt-5" key={index} onClick={() => handleChatClick(item.id)}>
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





