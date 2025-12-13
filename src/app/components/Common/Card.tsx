"use client";
import { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Button } from "./Button";
import { ImageType, ResultsType } from "@/app/types";
import { useStyleStore } from "@/app/state/store";
import { useRouter } from "next/navigation";
import { StyleGallery } from "../StyleGallery";

/**
 * A Card component that displays style information including an image, title, stylist name, description, and favorite functionality.
 * @param result - An object containing style details such as id, title, stylist_name, description, and style_image.
 * @returns A JSX element representing the Card component.
 */

const Card = ({ result }: { result: ResultsType }) => {
  const router = useRouter();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [showDisplay, setShowDisplay] = useState(false);
  const [activeImages, setActiveImages] = useState<{
    images: ImageType[] | [];
    title: string;
  }>({ images: [], title: "" });
  const { setSelectedStyle, favoriteIds, updateFavoriteIds } = useStyleStore();

  const toggleGallery = (images: ImageType[] | [], title: string) => {
    setActiveImages({ images, title });
    setShowDisplay((prev) => !prev);
  };

  const goToStyle = (e: React.MouseEvent, result: ResultsType) => {
    e.preventDefault();
    setSelectedStyle(result);
    router.push(`/style/${result.id}`);
  };

  const handleFavoriteStyle = (styleId: number) => {
    const style = localStorage.getItem("favorited");
    let favoritedStyle = style?.split(",").filter((id) => id !== "") || [];

    if (favoritedStyle.includes(styleId.toString())) {
      // Remove the id from existing favorited styles
      favoritedStyle = favoritedStyle.filter((id) => id !== styleId.toString());
    } else {
      // Add the id to favorited styles
      favoritedStyle.push(styleId.toString());
    }

    const updatedIds = favoritedStyle.join(",");
    updateFavoriteIds(favoritedStyle);
    localStorage.setItem("favorited", updatedIds);
  };

  const isFavorited = favoriteIds.includes(result?.id.toString());

  return (
    <>
      <div
        key={result.id}
        className="relative flex flex-col style items-start w-full drop-shadow-xl dark:drop-shadow-2xl hover:3xl bg-white rounded-xl"
      >
        <button
          onClick={() => toggleGallery(result.style_image, result.title)}
          className="group relative h-full w-full cursor-pointer aspect-[2/3] md:max-h-[460px] lg:max-h-[320px] max-h-full before:transition before:duration-500 hover:rounded-tl-xl hover:rounded-tr-xl hover:before:bg-gray-900 hover:before:top-0 hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:right-0 hover:before:z-20 hover:before:opacity-75"
        >
          {isImageLoading && (
            <div className="absolute inset-0">
              <Skeleton
                baseColor="#f5f5f5"
                highlightColor="#fff"
                width="100%"
                height="260px"
              />
            </div>
          )}
          <span className="transition duration-500 absolute z-20 left-0 right-0 top-[50%] translate-y-[-50%] mx-auto opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
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
            className="cursor-pointer rounded-tl-xl rounded-tr-xl object-cover object-top"
            loading="lazy"
            quality={100}
            onLoad={() => setIsImageLoading(false)}
            src={result.style_image[0].image}
            alt={result.style_image[0].image_alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 340px"
          ></Image>
        </button>
        <article className="px-4 py-4 flex flex-wrap h-full justify-between text-body-primary">
          <div className="">
            <h2 className="flex items-start justify-between text-h2 font-bold w-full m-0">
              {result.title}{" "}
              <button
                className="justify-center cursor-pointer hover:scale-105"
                onClick={() => handleFavoriteStyle(result.id)}
              >
                <FontAwesomeIcon
                  icon={isFavorited ? faHeart : faHeartRegular}
                  className="align-right text-secondary"
                />
              </button>
            </h2>
            <h3 className="text-h3 w-full">Stylist: {result.stylist_name}</h3>
            <p className="text-body mt-4">{result.description}</p>
          </div>
          <Button
            arrowPosition="right"
            customClasses="justify-end items-end"
            text="See Style Details"
            type="text"
            callback={(e: React.MouseEvent) => goToStyle(e, result)}
          ></Button>
        </article>
      </div>
      {showDisplay && (
        <StyleGallery
          handleLightbox={() => toggleGallery([], "")}
          showLightbox={showDisplay}
          imageInfo={activeImages}
        />
      )}
    </>
  );
};

export { Card };
