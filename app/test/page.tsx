"use client"
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
// import { Button, Input, Combobox, Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
import Image from "next/image";
import {  Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import Combobox from "@/common_components/dropdown";
import { Button } from "@/components/ui/button";
import Assets from "@/imports/assets.import";

// Sample assets and data (replace with your actual assets and data)

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

const options = ["Option 1", "Option 2", "Option 3"]; // Replace with actual options

export default function PeopleSelectionModal({
  open,
  onClose,
  onSubmit,
  title,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
}) {
  const [state, setState] = useState({
    isPeopleOpen: open,
    selectedTab: "musician", // Default to 'musician'
    musicianSearch: "",
    troupeSearch: "",
    bandSearch: "",
    musicianSelect: [],
    troupeSelect: [],
    bandSelect: [],
  });

  // Filter people based on the selected tab and search query
  const filteredPeople = peopleData[state.selectedTab]?.filter((person) =>
    person.name.toLowerCase().includes(state[`${state.selectedTab}Search`]?.toLowerCase())
  );

  // Handle search changes for each tab
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState({ ...state, [`${state.selectedTab}Search`]: value });
  };

  // Handle checkbox selection
  const handleSelectChange = (person: { name: string; logo: string }) => {
    const selectedList = state[`${state.selectedTab}Select`];
    if (selectedList.includes(person.name)) {
      setState({
        ...state,
        [`${state.selectedTab}Select`]: selectedList.filter((name) => name !== person.name),
      });
    } else {
      setState({
        ...state,
        [`${state.selectedTab}Select`]: [...selectedList, person.name],
      });
    }
  };

  return (
    <>
     <Button variant="outline" onClick={() => setState({ ...state, isPeopleOpen: true })}>
            Cancel
          </Button>
    <Dialog open={state.isPeopleOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg sm:max-w-lg xl:max-w-4xl lg:w-full"
        aria-labelledby="modal-title"
      >
        <DialogHeader>
          <DialogTitle id="modal-title" className="text-xl font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>

        <Tabs value={state.selectedTab} onValueChange={(value) => setState({ ...state, selectedTab: value })}>
          <TabsList className="w-full justify-evenly">
            <TabsTrigger value="musician">Musician Search</TabsTrigger>
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
                  <label className="block text-sm font-medium">Skills</label>
                  <Combobox options={options} selectedValues={[]} isMulti={false} placeholder="Select Skill" />
                </div>
                <div className="pt-3">
                  <label className="block text-sm font-medium">Location</label>
                  <Combobox options={options} selectedValues={[]} isMulti={false} placeholder="Select Location" />
                </div>
              </div>

              {/* Right side - User Profiles/List */}
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-2">
                  {filteredPeople?.map((person, index) => (
                    <li key={index} className="flex items-center border-b p-2">
                      <input
                        type="checkbox"
                        checked={state.musicianSelect.includes(person.name)}
                        onChange={() => handleSelectChange(person)}
                        className="mr-4"
                      />
                      <Image src={person.logo} alt={person.name} className="h-12 w-12 rounded-full object-cover" />
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
                  <label className="block text-sm font-medium">Skills</label>
                  <Combobox options={options} selectedValues={[]} isMulti={false} placeholder="Select Skill" />
                </div>
                <div className="pt-3">
                  <label className="block text-sm font-medium">Location</label>
                  <Combobox options={options} selectedValues={[]} isMulti={false} placeholder="Select Location" />
                </div>
              </div>

              {/* Right side - User Profiles/List */}
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-2">
                  {filteredPeople?.map((person, index) => (
                    <li key={index} className="flex items-center border-b p-2">
                      <input
                        type="checkbox"
                        checked={state.troupeSelect.includes(person.name)}
                        onChange={() => handleSelectChange(person)}
                        className="mr-4"
                      />
                      <Image src={person.logo} alt={person.name} className="h-12 w-12 rounded-full object-cover" />
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
                  <label className="block text-sm font-medium">Skills</label>
                  <Combobox options={options} selectedValues={[]} isMulti={false} placeholder="Select Skill" />
                </div>
                <div className="pt-3">
                  <label className="block text-sm font-medium">Location</label>
                  <Combobox options={options} selectedValues={[]} isMulti={false} placeholder="Select Location" />
                </div>
              </div>

              {/* Right side - User Profiles/List */}
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-2">
                  {filteredPeople?.map((person, index) => (
                    <li key={index} className="flex items-center border-b p-2">
                      <input
                        type="checkbox"
                        checked={state.bandSelect.includes(person.name)}
                        onChange={() => handleSelectChange(person)}
                        className="mr-4"
                      />
                      <Image src={person.logo} alt={person.name} className="h-12 w-12 rounded-full object-cover" />
                      <span>{person.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => setState({ ...state, isPeopleOpen: false })}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log("Selected Musicians:", state.musicianSelect);
              console.log("Selected Troupes:", state.troupeSelect);
              console.log("Selected Bands:", state.bandSelect);
              onSubmit(); 
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
}
