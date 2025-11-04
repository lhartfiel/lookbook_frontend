"use client";
import Image from "next/image";
import { useState } from "react";
import { Chatbot } from "./components/Chatbot";
import { ToggleMode } from "./components/Common/ToggleMode";

export default function Home() {
  const [showDarkMode, setShowDarkMode] = useState(false);
  const handleToggle = () => {
    setShowDarkMode((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 lg:gap-4 max-w-[1440px] mx-auto px-6 py-6">
      <div className="col-span-full lg:col-span-8 lg:col-start-3">
        <div className="relative flex justify-center my-10 mx-auto">
          <Image
            src="/lookbook_logo.svg"
            alt="The Lookbook logo"
            width={600}
            height={200}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <Chatbot></Chatbot>
      </div>
      <div className="col-span-3 lg:col-start-11 text-primary justify-start align-start">
        <span className="flex flex-nowrap items-center">
          <p className="mr-2 font-bold">Dark Mode</p>
          <ToggleMode
            handleToggle={handleToggle}
            showDarkMode={showDarkMode}
          ></ToggleMode>
          <p className="ml-2 font-bold">Light Mode</p>
        </span>
      </div>
    </div>
  );
}
