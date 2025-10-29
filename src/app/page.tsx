import Image from "next/image";
import { Chatbot } from "./components/Chatbot";

export default function Home() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 lg:gap-4 max-w-[1440px] mx-auto px-4 py-6">
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
