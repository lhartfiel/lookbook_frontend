"use client";
import { useState } from "react";
import { useStyleStore } from "../state/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { StyleGallery } from "./StyleGallery";
import { Tag } from "./Common/Tag";

const StyleDetail = () => {
  const router = useRouter();
  const [showDisplay, setShowDisplay] = useState(false);
  const { selectedStyle } = useStyleStore();

  const toggleGallery = () => {
    setShowDisplay((prev) => !prev);
  };
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
      <h1 className="text-h1 font-bold w-full lg:col-start-3 col-span-full">
        {selectedStyle?.title}
      </h1>
      <div className="lg:col-start-3 lg:col-span-8 col-span-10 col-start-1 flex flex-wrap sm:flex-nowrap shadow-2xl">
        <div className="flex md:w-[66.6%] min-h-[500px] w-full relative">
          {/* Add a Skeleton for image loading */}
          <button onClick={toggleGallery} className="cursor-pointer">
            <Image
              fill
              objectFit="cover"
              className="object-top"
              src={selectedStyle?.style_image[0].image || ""}
              alt={selectedStyle?.style_image[0].image_alt || ""}
            />
          </button>
        </div>
        <div className="flex flex-wrap flex-col text-body-primary justify-between min-h-[540px] bg-white h-full py-6 px-4 rounded-tr-sm rounded-br-sm">
          <span>
            <h2 className="text-h2 w-full">
              Stylist: {selectedStyle?.stylist_name}
            </h2>
            <p className="my-4 text-body text-body-primary">
              {selectedStyle?.description}
            </p>
            <ul className="text-body">
              <li>Length: {selectedStyle?.length || "N/A"}</li>
              <li>Texture: {selectedStyle?.texture || "N/A"}</li>
              <li>Thickness: {selectedStyle?.thickness || "N/A"}</li>
              <li>Maintenace: {selectedStyle?.maintenance || "N/A"}</li>
            </ul>
          </span>
          {selectedStyle?.tags && selectedStyle?.tags.length > 0 && (
            <div>
              {selectedStyle.tags.map((tag) => (
                <Tag tagName={tag} key={tag} />
              ))}
            </div>
          )}
        </div>
      </div>
      {showDisplay && (
        <StyleGallery
          handleLightbox={() => toggleGallery()}
          showLightbox={showDisplay}
          imageInfo={{
            images: selectedStyle?.style_image ?? [],
            title: selectedStyle?.title ?? "",
          }}
        />
      )}
    </>
  );
};

export { StyleDetail };
