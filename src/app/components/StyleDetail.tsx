"use client";
import { useState } from "react";
import { useStyleStore } from "../state/store";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "./Common/Button";
import { StyleGallery } from "./StyleGallery";
import { Tag } from "./Common/Tag";

const StyleDetail = () => {
  const router = useRouter();
  const [showGallery, setShowGallery] = useState(false);
  const [photoIsHovered, setPhotoIsHovered] = useState(false);
  const { selectedStyle } = useStyleStore();

  const toggleGallery = () => {
    setShowGallery((prev) => !prev);
  };

  const hoverImage = () => {
    setPhotoIsHovered((prev) => !prev);
  };
  return (
    <>
      <span className="lg:col-start-3 lg:col-span-2 col-start-2 col-span-3 self-end lg:flex-start">
        <Button
          arrowPosition="left"
          customClasses="justify-end lg:justify-start dark:text-green-400"
          type="text"
          text="Back"
          callback={() => router.back()}
        ></Button>
      </span>
      <h1 className="dark:text-white text-h1 font-bold w-full lg:col-start-3 col-span-full pt-3 pb-2">
        {selectedStyle?.title}
      </h1>
      <div className="lg:col-start-3 lg:col-span-8 col-span-10 col-start-1 flex flex-wrap sm:flex-nowrap shadow-2xl">
        <div className="flex w-full md:w-3/5 xl:w-2/3 min-h-[500px] hover:bg-gray-600 z-10">
          {/* Add a Skeleton for image loading */}
          <button
            onMouseEnter={hoverImage}
            onMouseLeave={hoverImage}
            onClick={toggleGallery}
            className="w-full relative cursor-pointer before:transition before:duration-500 hover:before:bg-gray-800 hover:before:top-0 hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:right-0 hover:before:z-20 hover:before:opacity-75"
          >
            {selectedStyle?.style_image[0].image && (
              <>
                <span
                  className={`transition duration-500 absolute z-20 left-0 right-0 top-[50%] translate-y-[-50%] mx-auto  ${
                    photoIsHovered
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  }`}
                >
                  <p className="text-body text-white mb-3 font-medium">
                    Click photo to see style gallery
                  </p>
                  <FontAwesomeIcon
                    className="text-[72px] text-white opacity-75 "
                    icon={faMaximize}
                  />
                </span>
                <Image
                  fill
                  objectFit="cover"
                  className="object-top"
                  src={selectedStyle?.style_image[0].image}
                  alt={selectedStyle?.style_image[0].image_alt || ""}
                />
              </>
            )}
          </button>
        </div>
        <div className="flex flex-wrap flex-col text-body-primary justify-between h-auto md:min-h-[540px] w-full md:w-2/5 xl:w-1/3 md:h-full bg-white py-6 px-4 rounded-tr-sm rounded-br-sm">
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
            <div className="mt-5">
              {selectedStyle.tags.map((tag) => (
                <Tag tagName={tag} key={tag} />
              ))}
            </div>
          )}
        </div>
      </div>
      {showGallery && (
        <StyleGallery
          handleLightbox={() => toggleGallery()}
          showLightbox={showGallery}
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
