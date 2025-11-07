"use client";
import Image from "next/image";
import { Chatbot } from "./components/Chatbot";

export default function Home() {
  return (
    <>
      <div className="col-span-full lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 flex flex-col">
        <div className="relative flex justify-center my-10 mx-auto">
          <h1>
            <Image
              src="/lookbook_logo.svg"
              alt="The Lookbook logo"
              width={600}
              height={200}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </h1>
        </div>
        <Chatbot></Chatbot>
      </div>
    </>
  );
}
