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
  const [state, setState] = useSetState({
    email: "",
  });

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const body = {
        email: state.email,
      };
    //   const res = await Models.auth.resetPassword(body);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Half */}
      <div className="flex flex-1 items-center justify-center bg-pink-500 text-white px-6 py-8 md:py-0">
        <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Join for an Exciting Musical Experience.
        </h1>
      </div>

      {/* Right Half */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-8 md:py-0">
        <div className="w-full max-w-lg">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src={Assets.padane}
              width={200}
              height={200}
              alt="Logo"
              className="max-w-full h-auto"
            />
          </div>

          <div className="flex flex-col text-center">
            <h1 className="pb-5 text-lg font-bold">
              Welcome to the Password Reset Page
            </h1>
            <p className="text-sm text-gray-700">
              Forgot your password? Please enter the email address you used to
              register with us, and we will send you a link to reset your
              password.
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 pt-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter your email"
                className="pl-10"
                value={state.email}
                onChange={(e) => setState({ email: e.target.value })}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                📧
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <Button className="flex-1" onClick={handleSubmit}>
              Send Email
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => router.push("/login")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
