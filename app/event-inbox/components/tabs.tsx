// import React from "react";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { LogOutIcon, SettingsIcon, StarIcon } from "lucide-react";
// import { Button } from "react-day-picker";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import { DotsHorizontalIcon, DotsVerticalIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";

// export const TabSection = ({ selectedCategory }) => {
//   // Data arrays
//   const invitation = {
//     received: [
//       { from: "@Indumathi Navinkumar", to: "Coimbatore rocks - Received", message: "Hi this is artist vignesh from Coimbatore." },
//       { from: "@John Doe", to: "Chennai vibes - Received", message: "Hi this is artist John from Chennai." },
//     ],
//     accepted: [
//       { from: "@Jane Smith", to: "Bangalore beats - Accepted", message: "Hi this is artist Jane from Bangalore." },
//     ],
//     rejected: [
//       { from: "@Alice Walker", to: "Delhi dreams - Rejected", message: "Hi this is artist Alice from Delhi." },
//     ],
//     pending: [
//       { from: "@Bob Brown", to: "Mumbai magic - Pending", message: "Hi this is artist Bob from Mumbai." },
//     ],
//   };

//   const interested = {
//     received: [
//       { from: "@Tom Hardy", to: "Kolkata culture - Received", message: "Hi this is artist Tom from Kolkata." },
//     ],
//     accepted: [
//       { from: "@Emma Stone", to: "Pune passion - Accepted", message: "Hi this is artist Emma from Pune." },
//     ],
//     rejected: [],
//     pending: [
//       { from: "@Chris Evans", to: "Hyderabad harmony - Pending", message: "Hi this is artist Chris from Hyderabad." },
//     ],
//   };

//   // Normalize selectedCategory to lowercase
//   const normalizedCategory = selectedCategory?.toLowerCase();

//   // Function to get data based on category and selected tab
//   const getData = (tab) => {
//     if (tab === "invitation") {
//       return invitation[normalizedCategory] || [];
//     } else if (tab === "interested") {
//       return interested[normalizedCategory] || [];
//     }
//     return [];
//   };
// const handleSort=()=>{}
//   return (
//     <Tabs defaultValue="invitation">
//       <TabsList className="flex justify-evenly w-full">
//         <TabsTrigger value="invitation">Invitation</TabsTrigger>
//         <TabsTrigger value="interested">Interested</TabsTrigger>
      
//       </TabsList>

//       <div className="flex items-end" >
//       <p className="text-gray-500 w-full px-2 mt-2" style={{textAlign:"end"}} 
//       onClick={handleSort}
//       >Sort By</p>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
            
//               <div className="mt-2 bg-gray-100 p-2">
//               <p className="text-gray-500 w-full px-2 mt-2" style={{textAlign:"end"}} 
//             ></p>
//                 <DotsVerticalIcon className="h-5 w-5 text-gray-700" /> 
//               </div> 
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-40" align="end">
//               {/* Settings Item with Icon */}
//               <DropdownMenuItem>
//                 {/* <SettingsIcon className="mr-2 h-4 w-4 text-gray-500" /> */}
//                 Received
//               </DropdownMenuItem>

//               {/* Help & Feedback Item with Icon */}
//               <DropdownMenuItem>
//                 {/* <QuestionMarkCircledIcon className="mr-2 h-4 w-4 text-gray-500" /> */}
//                 Accepted
//               </DropdownMenuItem>

//               {/* Sign Out Item with Icon */}
//               <DropdownMenuItem>
//                 {/* <LogOutIcon className="mr-2 h-4 w-4 text-gray-500" /> */}
//                 Rejected
//               </DropdownMenuItem>

//               <DropdownMenuItem>
//                 {/* <LogOutIcon className="mr-2 h-4 w-4 text-gray-500" /> */}
//                 Pending
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//       </div>

//       {/* Invitation Tab */}
//       <TabsContent value="invitation">
//         {normalizedCategory && invitation[normalizedCategory]?.length > 0 ? (
//           invitation[normalizedCategory].map((item, index) => (
//             <Card className="w-3/4 m-5" key={index}>
//               <CardHeader>
//                 <CardDescription>Invite From: {item.from}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex space-x-2">
//                   <StarIcon className="text-sm" />
//                   <a href="#">
//                     <p className="underline">{item.to}</p>
//                   </a>
//                 </div>
//                 <CardDescription className="mt-5">{item.message}</CardDescription>
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <Card className="w-3/4 m-5">
//             <CardTitle className="m-5">No records found</CardTitle>
//           </Card>
//         )}
//       </TabsContent>

//       {/* Interested Tab */}
//       <TabsContent value="interested">
//         {normalizedCategory && interested[normalizedCategory]?.length > 0 ? (
//           interested[normalizedCategory].map((item, index) => (
//             <Card className="w-3/4 m-5" key={index}>
//               <CardHeader>
//                 <CardDescription>Invite From: {item.from}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex space-x-2">
//                   <StarIcon className="text-sm" />
//                   <a href="#">
//                     <p className="underline">{item.to}</p>
//                   </a>
//                 </div>
//                 <CardDescription className="mt-5">{item.message}</CardDescription>
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <Card className="w-3/4 m-5">
//             <CardTitle className="m-5 ">No records found</CardTitle>
//           </Card>
//         )}
//       </TabsContent>
//     </Tabs>
//   );
// };


import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

export const TabSection = ({ selectedCategory }) => {
  // Data arrays
  const invitation = {
    received: [
      { from: "@Indumathi Navinkumar", to: "Coimbatore rocks - Received", message: "Hi this is artist vignesh from Coimbatore." },
      { from: "@John Doe", to: "Chennai vibes - Received", message: "Hi this is artist John from Chennai." },
    ],
    accepted: [
      { from: "@Jane Smith", to: "Bangalore beats - Accepted", message: "Hi this is artist Jane from Bangalore." },
    ],
    rejected: [
      { from: "@Alice Walker", to: "Delhi dreams - Rejected", message: "Hi this is artist Alice from Delhi." },
    ],
    pending: [
      { from: "@Bob Brown", to: "Mumbai magic - Pending", message: "Hi this is artist Bob from Mumbai." },
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
  const [filter, setFilter] = useState("All");

  const normalizedCategory = selectedCategory?.toLowerCase();

  const getData = () => {
    const data =
      selectedTab === "invitation"
        ? invitation[normalizedCategory] || []
        : interested[normalizedCategory] || [];

    if (filter === "All") return data;
    return data.filter((item) => item.to.toLowerCase().includes(filter.toLowerCase()));
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
            <div className="bg-gray-100 p-2 rounded cursor-pointer">
              <DotsVerticalIcon className="h-5 w-5 text-gray-700" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="end">
            <DropdownMenuItem onSelect={() => setFilter("All")}>All</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setFilter("Received")}>Received</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setFilter("Accepted")}>Accepted</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setFilter("Rejected")}>Rejected</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setFilter("Pending")}>Pending</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <TabsContent value="invitation">
        {getData().length > 0 ? (
          getData().map((item, index) => (
            <Card className="w-3/4 m-5" key={index}>
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
          <Card className="w-3/4 m-5">
            <CardTitle className="m-5">No records found</CardTitle>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="interested">
        {getData().length > 0 ? (
          getData().map((item, index) => (
            <Card className="w-3/4 m-5" key={index}>
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
          <Card className="w-3/4 m-5">
            <CardTitle className="m-5">No records found</CardTitle>
          </Card>
        )}
      </TabsContent>
    </Tabs>
  );
};





