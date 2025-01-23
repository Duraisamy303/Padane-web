"use client";

import Navbar from "@/common_components/nav";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "@/common_components/menu";
import { useSetState } from "@/utils/functions.utils";
import Assets from "@/imports/assets.import";
import Models from "@/imports/models.import";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/common_components/datePicker";
import Dropdown from "@/common_components/dropdown";
import { Switchs } from "@/common_components/switch";
import Modal from "@/common_components/modal";
import Combobox from "@/common_components/dropdown";
import { CheckboxDemo } from "@/common_components/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Tabs from Shadcn
import Event_cart from "@/components/Event_cart";
import { NearEvent } from "@/utils/constant.utils";
import RecommentedPeopleList from "../profile/components/RecommentedPeopleList";
import { SelectSeparator } from "@radix-ui/react-select";
import { Avatar } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

const sampleData = [
  {
    id: 1,
    image: Assets.logo,
    username: "User 1",
    followers: 10,
    following: 20,
  },
  {
    id: 2,
    image: Assets.mobile_ping_1,
    username: "User 2",
    followers: 15,
    following: 25,
  },
  {
    id: 3,
    image: Assets.mobile_ping_1,
    username: "User 3",
    followers: 30,
    following: 40,
  },
  {
    id: 4,
    image: Assets.mobile_ping_1,
    username: "User 4",
    followers: 50,
    following: 60,
  },
  {
    id: 5,
    image: Assets.mobile_ping_1,
    username: "User 5",
    followers: 70,
    following: 80,
  },
  {
    id: 6,
    image: Assets.mobile_ping_1,
    username: "User 6",
    followers: 90,
    following: 100,
  },
];

const activity = [
  {
    id: 1,
    image: Assets.mobile_ping_1,
    description: "Durai accepted your invitation to New Eventss.",
    time: "4 months, 4 weeks ago",
  },
  {
    id: 2,
    image: Assets.mobile_ping_1,
    description: "Durai accepted your invitation to New Eventss.",
    time: "3 months, 2 weeks ago",
  },
  {
    id: 3,
    image: Assets.mobile_ping_1,
    description: "Durai accepted your invitation to New Eventss.",
    time: "2 months, 1 week ago",
  },
];

export default function Index() {
  const [state, setState] = useSetState({
    activeTab: "Upcoming Event",
    skills: [],
  });

  const [eventData, setEventData] = useState({
    eventName: "",
    eventCategory: "",
    eventType: "",
    eventDetails: "",
    highlights: "",
    location: "",
    registrationCloseDate: "",
    fromDate: "",
    toDate: "",
    venue: "",
    posterImage: "",
    ticketBookingLink: "",
    ticketBookingPlace: "",
    isLimitedToPersonalInvite: false,
    autoAccept: false,
    isOpenModal: false,
  });

  const options = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];

  const checkboxOptions = [
    { label: "Mridangam", value: "mridangam" },
    { label: "Veena", value: "veena" },
    { label: "Guitar", value: "guitar" },
    { label: "Piano", value: "piano" },
  ];
  const peopleData = {
    musician: [
      { name: "John Doe", logo: Assets.mobile_ping_1 },
      { name: "Jane Smith", logo: Assets.mobile_ping_1 },
      { name: "Alex Brown", logo: Assets.mobile_ping_1 },
    ],
    troupe: [
      { name: "Troupe A", logo: Assets.mobile_ping_1 },
      { name: "Troupe B", logo: Assets.mobile_ping_1 },
      { name: "Troupe C", logo: Assets.mobile_ping_1 },
    ],
    band: [
      { name: "Band X", logo: Assets.mobile_ping_1 },
      { name: "Band Y", logo: Assets.mobile_ping_1 },
      { name: "Band Z", logo: Assets.mobile_ping_1 },
    ],
  };

  const filteredPeople = peopleData[state.selectedTab]?.filter((person) =>
    person.name
      .toLowerCase()
      .includes(state[`${state.selectedTab}Search`]?.toLowerCase()),
  );
  console.log("filteredPeople: ", filteredPeople);

  // Handle search changes for each tab
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, [`${state.selectedTab}Search`]: value });
  };

  // Handle checkbox selection for people in the list
  const handleSelectChange = (person: { name: string; logo: string }) => {
    const selectedList = state[`${state.selectedTab}Select`];
    if (selectedList.includes(person.name)) {
      setState({
        ...state,
        [`${state.selectedTab}Select`]: selectedList.filter(
          (name) => name !== person.name,
        ),
      });
    } else {
      setState({
        ...state,
        [`${state.selectedTab}Select`]: [...selectedList, person.name],
      });
    }
  };

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const tabs = ["Upcoming", "Completed ", "New Event"];


  return (
    <div className="h-screen w-full">
      <Navbar />
      <Menu
        tabs={tabs}
        handleTabClick={(item: any) => {
          setState({ activeTab: item });
        }}
      />
      <div className="container">
      {state.activeTab !== "Create New Event" ? (
       <div className="flex h-full flex-col gap-3 p-4 md:flex-row">
       <div className="md:w-3/4 lg:w-3/4">
         <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
           {NearEvent.map((item, index) => (
             <Event_cart key={index} item={item} />
           ))}
         </div>
       </div>
     
       {/* Right Section: Event Activities */}
       <div className="w-full md:w-1/4 lg:w-1/4 mt-6 md:mt-0">
         <div className="max-w-full">
           <Card>
             <CardHeader className="p-4">
               <CardTitle>
                 <div className="flex items-center justify-between">
                   <p className="text-lg font-semibold">Event Activities</p>
                 </div>
               </CardTitle>
             </CardHeader>
     
             <SelectSeparator className="border-t" />
     
             <CardContent className="mt-4 space-y-2">
               {activity?.map((people, index) => (
                 <div
                   key={index}
                   className={cn(
                     "flex cursor-pointer items-center space-x-4 space-y-0 border-b border-gray-200 pb-3 last:border-b-0 last:pb-0",
                   )}
                 >
                   <Avatar className="h-10 w-10 overflow-hidden rounded-full">
                     <img
                       src={`https://i.pravatar.cc/150?img=${index + 1}`}
                       alt={` avatar`}
                     />
                   </Avatar>
                   <div className="flex-grow">
                     <p className="text-md font-medium">{people.description}</p>
                     <p className="text-xs text-gray-500">{people.time}</p>
                   </div>
                 </div>
               ))}
             </CardContent>
           </Card>
         </div>
       </div>
     </div>
     
      ) : (
        <div className=" flex items-center justify-center bg-gray-100 pt-5">
          <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Create Event
            </h2>

            <form className="space-y-6">
              <div className="">
                <div>
                  <label
                    htmlFor="eventName"
                    className="block text-sm font-medium"
                  >
                    Event Name
                  </label>
                  <Input
                    id="eventName"
                    name="eventName"
                    value={eventData.eventName}
                    onChange={handleChange}
                    className="mt-2 w-full"
                    placeholder="Enter event name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="eventCategory"
                    className="block text-sm font-medium"
                  >
                    Event Category
                  </label>
                  <Combobox
                    options={options}
                    selectedValues={state.eventCategory}
                    onChange={(value) => setState({ eventCategory: value })}
                    isMulti={false}
                    placeholder="Select Event Category"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="eventCategory"
                    className="block text-sm font-medium"
                  >
                    Event Type
                  </label>
                  <Combobox
                    options={options}
                    selectedValues={state.eventType}
                    onChange={(value) => setState({ eventType: value })}
                    isMulti={false}
                    placeholder="Select Event Type"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="eventDetails"
                    className="block text-sm font-medium"
                  >
                    Event Details
                  </label>
                  <Textarea
                    id="eventDetails"
                    name="eventDetails"
                    value={eventData.eventDetails}
                    onChange={handleChange}
                    className="mt-2 w-full"
                    placeholder="Enter event details"
                  />
                </div>

                <div>
                  <label
                    htmlFor="highlights"
                    className="block text-sm font-medium"
                  >
                    Highlights
                  </label>
                  <Textarea
                    id="highlights"
                    name="highlights"
                    value={eventData.highlights}
                    onChange={handleChange}
                    className="mt-2 w-full"
                    placeholder="Enter event highlights"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="eventCategory"
                    className="block text-sm font-medium"
                  >
                    Location
                  </label>
                  <Combobox
                    options={options}
                    selectedValues={state.location}
                    onChange={(value) => setState({ location: value })}
                    isMulti={false}
                    placeholder="Select Location"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="registrationCloseDate"
                    className="block text-sm font-medium"
                  >
                    Registration Close Date
                  </label>
                  <DatePicker
                    id="registrationCloseDate"
                    name="registrationCloseDate"
                    placeholder="Registration Close Date"
                    selectedDate={eventData.registrationCloseDate}
                    onChange={(date) =>
                      setEventData({
                        ...eventData,
                        registrationCloseDate: date,
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fromDate"
                    className="block text-sm font-medium"
                  >
                    From Date
                  </label>
                  <DatePicker
                    id="fromDate"
                    name="fromDate"
                    placeholder="From Date"
                    selectedDate={eventData.fromDate}
                    onChange={(date) =>
                      setEventData({ ...eventData, fromDate: date })
                    }
                    className="mt-2 w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="toDate" className="block text-sm font-medium">
                    To Date
                  </label>
                  <DatePicker
                    id="toDate"
                    name="toDate"
                    placeholder="To Date"
                    selectedDate={eventData.toDate}
                    onChange={(date) =>
                      setEventData({ ...eventData, toDate: date })
                    }
                    className="mt-2 w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium">
                    Venue
                  </label>
                  <Input
                    id="venue"
                    name="venue"
                    value={eventData.venue}
                    onChange={handleChange}
                    className="mt-2 w-full"
                    placeholder="Enter venue"
                  />
                </div>

                <div>
                  <label
                    htmlFor="posterImage"
                    className="block text-sm font-medium"
                  >
                    Poster Image
                  </label>
                  <Input
                    id="posterImage"
                    name="posterImage"
                    value={eventData.posterImage}
                    onChange={handleChange}
                    className="mt-2 w-full"
                    type="file"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="ticketBookingLink"
                    className="block text-sm font-medium"
                  >
                    Ticket Booking Link
                  </label>
                  <Input
                    id="ticketBookingLink"
                    name="ticketBookingLink"
                    value={eventData.ticketBookingLink}
                    onChange={handleChange}
                    className="mt-2 w-full"
                    placeholder="Enter ticket booking link"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ticketBookingPlace"
                    className="block text-sm font-medium"
                  >
                    Ticket Booking Place
                  </label>
                  <Input
                    id="ticketBookingPlace"
                    name="ticketBookingPlace"
                    value={eventData.ticketBookingPlace}
                    onChange={handleChange}
                    className="mt-2 w-full"
                    placeholder="Enter ticket booking place"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Switchs label="Limited to personal invitation, No other registration allowed." />
                </div>

                <div>
                  <Switchs label="Auto accept" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                <Button className="mt-6 w-full">Cancel</Button>

                <Button
                  className="mt-6 w-full"
                  type="button"
                  onClick={() => setState({ isModalOpen: true })}
                >
                  Call For
                </Button>
                <Button
                  className="mt-6 w-full"
                  type="button"
                  onClick={() => setState({ isPeopleOpen: true })}
                >
                  Add People
                </Button>
                <Button className="mt-6 w-full">Create Event</Button>
              </div>

              <div className="text-center">
                <Button className="mt-6 w-full">Create Event</Button>
              </div>
              <Modal
                open={state.isModalOpen}
                onClose={() => setState({ isModalOpen: false })}
                onSubmit={() => setState({ isModalOpen: false })}
                title={"Required Skill"}
                renderComponent={() => (
                  <>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="eventCategory"
                        className="block text-sm font-medium"
                      >
                        Choose a category
                      </label>
                      <Combobox
                        options={options}
                        selectedValues={state.selectSkill}
                        onChange={(value) => setState({ selectSkill: value })}
                        isMulti={false}
                        placeholder="Select Skill"
                      />
                      <label
                        htmlFor="eventCategory"
                        className="block text-lg font-bold"
                      >
                        Skill
                      </label>
                      <div className="flex flex-col gap-3">
                        {checkboxOptions.map(({ label, value }) => (
                          <CheckboxDemo
                            key={value}
                            label={label}
                            value={value}
                            selectedValues={state.skills}
                            onChange={(data) => setState({ skills: data })}
                            isMulti={true}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-end gap-5">
                      <Button
                        variant="outline"
                        className="sm:w-auto lg:w-[100px]"
                        onClick={() => setState({ isModalOpen: false })}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="sm:w-auto lg:w-[100px]"
                        onClick={() => setState({ isModalOpen: false })}
                      >
                        Confirm
                      </Button>
                    </div>
                  </>
                )}
              />

              <Modal
                open={state.isPeopleOpen}
                onClose={() => setState({ isPeopleOpen: false })}
                onSubmit={() => setState({ isPeopleOpen: false })}
                title={"Choose People"}
                width="1000px"
                renderComponent={() => (
                  <>
                    <Tabs
                      value={state.selectedTab}
                      onValueChange={(value) =>
                        setState({ selectedTab: value })
                      }
                    >
                      <TabsList className="w-full justify-evenly">
                        <TabsTrigger value="musician">
                          Musician Search
                        </TabsTrigger>
                        <TabsTrigger value="troupe">Troupe Search</TabsTrigger>
                        <TabsTrigger value="band">Band Search</TabsTrigger>
                      </TabsList>

                      <TabsContent value="musician">
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <Input
                              placeholder="Search Musicians"
                              value={state.musicianSearch}
                              onChange={handleSearchChange}
                            />
                            <div className="pt-3">
                              <label className="block text-sm font-medium">
                                Skills
                              </label>
                              <Combobox
                                options={options}
                                selectedValues={state.musicianselectSkill}
                                onChange={(value) =>
                                  setState({ musicianselectSkill: value })
                                }
                                isMulti={false}
                                placeholder="Select Skill"
                              />
                            </div>
                            <div className="pt-3">
                              <label
                                htmlFor="eventCategory"
                                className="block text-sm font-medium"
                              >
                                Skill level
                              </label>
                              <Combobox
                                options={options}
                                selectedValues={state.skillLevel}
                                onChange={(value) =>
                                  setState({ skillLevel: value })
                                }
                                isMulti={false}
                                placeholder="Select Level"
                              />
                            </div>
                            <div className="pt-3">
                              <label className="block text-sm font-medium">
                                Location
                              </label>
                              <Combobox
                                options={options}
                                selectedValues={[]}
                                isMulti={false}
                                placeholder="Select Location"
                              />
                            </div>
                          </div>

                          {/* Right side - User Profiles/List */}
                          <div className="flex-1 overflow-y-auto">
                            <ul className="space-y-2">
                              {filteredPeople?.map((person, index) => (
                                <li
                                  key={index}
                                  className="flex items-center border-b p-2"
                                >
                                  <input
                                    type="checkbox"
                                    checked={state.musicianSelect.includes(
                                      person.name,
                                    )}
                                    onChange={() => handleSelectChange(person)}
                                    className="mr-4"
                                  />
                                  <Image
                                    src={person.logo}
                                    alt={person.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                  />
                                  <span>{person.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Similar TabsContent for 'troupe' */}
                      <TabsContent value="troupe">
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <Input
                              placeholder="Search Troupes"
                              value={state.troupeSearch}
                              onChange={handleSearchChange}
                            />
                            <div className="pt-3">
                              <label className="block text-sm font-medium">
                                Skills
                              </label>
                              <Combobox
                                options={options}
                                selectedValues={[]}
                                isMulti={false}
                                placeholder="Select Skill"
                              />
                            </div>
                            <div className="pt-3">
                              <label className="block text-sm font-medium">
                                Location
                              </label>
                              <Combobox
                                options={options}
                                selectedValues={[]}
                                isMulti={false}
                                placeholder="Select Location"
                              />
                            </div>
                          </div>

                          {/* Right side - User Profiles/List */}
                          <div className="flex-1 overflow-y-auto">
                            <ul className="space-y-2">
                              {filteredPeople?.map((person, index) => (
                                <li
                                  key={index}
                                  className="flex items-center border-b p-2"
                                >
                                  <input
                                    type="checkbox"
                                    checked={state.troupeSelect.includes(
                                      person.name,
                                    )}
                                    onChange={() => handleSelectChange(person)}
                                    className="mr-4"
                                  />
                                  <Image
                                    src={person.logo}
                                    alt={person.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                  />
                                  <span>{person.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Similar TabsContent for 'band' */}
                      <TabsContent value="band">
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <Input
                              placeholder="Search Bands"
                              value={state.bandSearch}
                              onChange={handleSearchChange}
                            />
                            <div className="pt-3">
                              <label className="block text-sm font-medium">
                                Skills
                              </label>
                              <Combobox
                                options={options}
                                selectedValues={[]}
                                isMulti={false}
                                placeholder="Select Skill"
                              />
                            </div>
                            <div className="pt-3">
                              <label className="block text-sm font-medium">
                                Location
                              </label>
                              <Combobox
                                options={options}
                                selectedValues={[]}
                                isMulti={false}
                                placeholder="Select Location"
                              />
                            </div>
                          </div>

                          {/* Right side - User Profiles/List */}
                          <div className="flex-1 overflow-y-auto">
                            <ul className="space-y-2">
                              {filteredPeople?.map((person, index) => (
                                <li
                                  key={index}
                                  className="flex items-center border-b p-2"
                                >
                                  <input
                                    type="checkbox"
                                    checked={state.bandSelect.includes(
                                      person.name,
                                    )}
                                    onChange={() => handleSelectChange(person)}
                                    className="mr-4"
                                  />
                                  <Image
                                    src={person.logo}
                                    alt={person.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                  />
                                  <span>{person.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                    <div className="flex justify-end gap-5">
                      <Button
                        variant="outline"
                        className="sm:w-auto lg:w-[100px]"
                        onClick={() => setState({ isPeopleOpen: false })}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="sm:w-auto lg:w-[100px]"
                        onClick={() => setState({ isPeopleOpen: false })}
                      >
                        Confirm
                      </Button>
                    </div>
                  </>
                )}
              />
            </form>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
