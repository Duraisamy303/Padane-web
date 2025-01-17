"use client";

import Navbar from "@/common_components/nav";
import React, { useState } from "react";
import Menu from "@/common_components/menu";
import { useSetState } from "@/utils/functions.utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/common_components/datePicker";
import Dropdown from "@/common_components/dropdown";
import { Switchs } from "@/common_components/switch";
import Modal from "@/common_components/modal";

export default function Index() {
  const [state, setState] = useSetState({
    activeTab: "Upcoming Event",
    isModalOpen: false,
  });

  const tabs = ["Upcoming Event", "Completed Event", "Create New Event"];

  // Form state
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setEventData({ ...eventData, [name]: checked });
  };

  return (
    <div className="h-screen w-full">
      <Navbar />
      {/* <Menu
        tabs={tabs}
        handleTabClick={(item: any) => {
          setState({ activeTab: item });
        }}
      /> */}

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
                <Dropdown placeholder="Select Event Category" />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="eventCategory"
                  className="block text-sm font-medium"
                >
                  Event Type
                </label>
                <Dropdown placeholder="Select Event Type" />
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
                <label htmlFor="location" className="block text-sm font-medium">
                  Location
                </label>
                <Input
                  id="location"
                  name="location"
                  value={eventData.location}
                  onChange={handleChange}
                  className="mt-2 w-full"
                  placeholder="Enter event location"
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
              <Button className="mt-6 w-full">Add People</Button>
              <Button className="mt-6 w-full">Create Event</Button>
            </div>

            <div className="text-center">
              <Button className="mt-6 w-full">Create Event</Button>
            </div>
            <Modal
              open={state.isModalOpen}
              onClose={() => setState({ isModalOpen: false })}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
