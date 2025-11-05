"use client";
import Image from "next/image";
import { Chatbot } from "./components/Chatbot";
import { ToggleMode } from "./components/Common/ToggleMode";
import { useStyleStore } from "./state/store";

export default function Home() {
  const { updateThemeMode, themeModeIsDark } = useStyleStore();
  const handleToggle = () => {
    updateThemeMode(!themeModeIsDark);
    localStorage.setItem("dark-theme", `${!themeModeIsDark}`);
  };

  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 lg:gap-4 max-w-[1440px] mx-auto px-6 py-6">
      <div className="col-span-12  text-primary justify-items-end align-start">
        <span className="flex flex-nowrap items-center">
          <p className="mr-2 font-bold dark:text-secondary">Light Mode</p>
          <ToggleMode
            handleToggle={handleToggle}
            showDarkMode={themeModeIsDark}
          ></ToggleMode>
          <p className="ml-2 font-bold dark:text-secondary">Dark Mode</p>
        </span>
      </div>
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
    </div>
  );
}
