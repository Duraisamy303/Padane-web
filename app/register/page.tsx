"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Assets from "@/imports/assets.import";
import Image from "next/image";
import { useSetState } from "@/utils/functions.utils";
import Models from "@/imports/models.import";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [state, setState] = useSetState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "", // Single role selection
  });

  const handleRoleChange = (role) => {
    setState({ role });
  };

  const handleSubmit = async () => {
    try {
      const body = {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
        role: state.role,
      };
      console.log("body: ", body);

      //   const res = await Models.auth.register(body);
      //   console.log("Registration successful:", res);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Left Half */}
      <div className="flex flex-1 items-center justify-center bg-pink-500 px-6 py-8 text-white md:py-0">
        <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Join for an Exciting Musical Experience.
        </h1>
      </div>

      {/* Right Half */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-8 md:py-0">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src={Assets.padane}
              width={200}
              height={200}
              alt="Logo"
              className="h-auto max-w-full"
            />
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="First Name"
              className="pl-4"
              value={state.firstName}
              onChange={(e) => setState({ firstName: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="pl-4"
              value={state.lastName}
              onChange={(e) => setState({ lastName: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Enter your email"
              className="pl-4"
              value={state.email}
              onChange={(e) => setState({ email: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              className="pl-4"
              value={state.password}
              onChange={(e) => setState({ password: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Confirm your password"
              className="pl-4"
              value={state.confirmPassword}
              onChange={(e) => setState({ confirmPassword: e.target.value })}
            />

            {/* Role Selection */}
            <div className="space-y-2 pt-4">
              <label className="block font-bold text-gray-700">
                Select Role:
              </label>
              {[
                "Band",
                "Event Organizer",
                "Music Lover",
                "Music School",
                "Musician",
              ].map((role) => (
                <div key={role} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={role}
                    name="role"
                    value={role}
                    checked={state.role === role}
                    onChange={() => handleRoleChange(role)}
                    className="h-4 w-4"
                  />
                  <label htmlFor={role} className="text-gray-700">
                    {role}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-6 w-full" onClick={() => handleSubmit()}>
            Submit
          </Button>

          <div className="flex w-full items-center justify-center gap-1 pt-3">
            <div className="">Have an account? </div>
            <div
              className=" cursor-pointer text-blue-600"
              onClick={() => router.push("/login")}
            >
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
