"use client";

import Navbar from "@/common_components/nav";
import React, { useEffect,useState } from "react";
import Link from "next/link";
import Menu from "@/common_components/menu";
import { useSetState } from "@/utils/functions.utils";
import Assets from "@/imports/assets.import";
import Models from "@/imports/models.import";
import { Card } from "@/components/ui/card";
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
    skills:[]
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

  const tabs = ["Upcoming Event", "Completed Event", "Create New Event"];

  return (
    <div className="h-screen w-full">
      <Navbar />
      <Menu
        tabs={tabs}
        handleTabClick={(item: any) => {
          setState({ activeTab: item });
        }}
      />
      {state.activeTab !== "Create New Event" ? (
        <div className="flex h-full flex-col p-4 md:flex-row">
          <div className="grid w-full grid-cols-1 gap-6 px-4 md:w-3/4 ">
            {sampleData.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col rounded-lg  bg-white shadow-md lg:flex-row lg:p-4"
              >
                <div className="bg-black">
                  <Image
                    src={item.image}
                    alt={item.username}
                    width={200}
                    height={200}
                    className="mb-4 rounded-full object-cover lg:mb-0 lg:mr-6 "
                  />
                </div>
                <div className="flex w-full flex-col lg:pl-10 lg:text-left">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-xl font-semibold">
                      {"Oli Oli - Tamil Alternative Music Festival"}
                    </p>
                    <Image
                      src={Assets.checked}
                      alt={item.username}
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="flex  gap-2 py-2 text-sm text-gray-500">
                    <Image
                      src={Assets.checked}
                      alt={item.username}
                      width={20}
                      height={20}
                    />
                    Coimbatore
                  </p>
                  <p className="flex  gap-2 py-2 text-sm text-gray-500">
                    <Image
                      src={Assets.checked}
                      alt={item.username}
                      width={20}
                      height={20}
                    />
                    Feb 20,25 10:30 a.m. Nov 30,24 2:39 p.m.
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 w-full md:mt-0 md:w-1/4 md:pl-3">
            <p className="text-lg font-semibold">{"Event Activity"}</p>
            {activity.map((item) => (
              <div key={item.id} className="mb-4 flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={"item.username"}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" flex items-center justify-center bg-gray-100 pt-5">
        <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-3xl font-bold">Create Event</h2>

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
                    setEventData({ ...eventData, registrationCloseDate: date })
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="fromDate" className="block text-sm font-medium">
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
                    onValueChange={(value) => setState({ selectedTab: value })}
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
  );
}
