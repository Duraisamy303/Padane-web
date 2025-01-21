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
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const body = {
        email: state.email,
        password: state.password,
      };
      const res = await Models.auth.login(body);
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

            <div className="relative">
              <Input
                type="password"
                placeholder="Enter your password"
                className="pl-10"
                value={state.password}
                onChange={(e) => setState({ password: e.target.value })}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                🔒
              </span>
            </div>
          </div>
          <div
            className="cursor-pointer pt-6 text-center text-gray-400"
            onClick={() => router.push("/forget_password")}
          >
            Forgot Password
          </div>
          <div className="flex w-full items-center justify-center gap-1 pt-3">
            <div className="">Not a member?</div>
            <div
              className=" cursor-pointer text-blue-600"
              onClick={() => router.push("/register")}
            >
              Register
            </div>
          </div>

          <Button className="mt-6 w-full" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
