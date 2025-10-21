import Image from "next/image";
import { Chatbot } from "./components/Chatbot";

export default function Home() {
  return (
    <div className="flex flex-wrap max-w-[1440px] mx-auto px-4">
      <h1 className="text-center w-full">Your Lookbook</h1>
      <Chatbot></Chatbot>
    </div>
  );
}
