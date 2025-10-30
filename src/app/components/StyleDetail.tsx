"use client";
import { useStyleStore } from "../state/store";
import { useRouter } from "next/navigation";
import Image from "next/image";

const StyleDetail = () => {
  const router = useRouter();
  const { selectedStyle } = useStyleStore();
  return (
    <>
      <span className="lg:col-start-2 lg:col-span-2">
        <button
          className="cursor-pointer text-body-primary w-full"
          onClick={() => router.back()}
        >
          Back
        </button>
      </span>
      <h1 className="w-full lg:col-start-3 col-span-full">
        {selectedStyle?.title}
      </h1>
      <div className="lg:col-start-3 lg:col-span-8 col-span-10 col-start-1 flex flex-wrap sm:flex-nowrap">
        <div className="flex md:grid-rows-4 min-h-[500px] w-full relative ">
          <Image
            fill
            objectFit="cover"
            className="object-top"
            src={selectedStyle?.style_image[0].image || ""}
            alt={selectedStyle?.style_image[0].image_alt || ""}
          />
        </div>
        <div className="flex flex-wrap min-h-[540px] bg-white py-6 px-4">
          <h2 className="text-h2 w-full">
            Stylist: {selectedStyle?.stylist_name}
          </h2>
          <p>{selectedStyle?.description}</p>
        </div>
      </div>
    </>
  );
};

export { StyleDetail };
