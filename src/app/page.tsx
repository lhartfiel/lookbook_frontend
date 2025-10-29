import Image from "next/image";
import { Chatbot } from "./components/Chatbot";

export default function Home() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 lg:gap-4 max-w-[1440px] mx-auto px-4">
      <div className="col-span-full lg:col-span-8 lg:col-start-3">
        <h1 className="text-center w-full">Your Lookbook</h1>
        <Chatbot></Chatbot>
      </div>
    </div>
  );
}
