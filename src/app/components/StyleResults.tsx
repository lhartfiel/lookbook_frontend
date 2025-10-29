"use client";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { StyleGallery } from "./StyleGallery";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface imageType {
  id: number;
  image: string;
  image_alt: string;
  style: number;
  type: string;
  view: string;
}

interface resultsType {
  client_permission: boolean;
  created_at: string;
  description: string;
  id: number;
  length: string;
  maintenance: string;
  style_image: imageType[];
  stylist_name: string;
  tags: string[];
  texture: string;
  thickness: string;
  title: string;
  updated_at: string;
}

export default function myImageLoader() {
  return (
    <Skeleton
      baseColor="#f5f5f5"
      highlightColor="#fff"
      width="100%"
      height="240px"
    />
  );
}

const StyleResults = ({
  results,
  loading,
}: {
  results?: resultsType[];
  loading: boolean;
}) => {
  const [showDisplay, setShowDisplay] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [activeImages, setActiveImages] = useState({ images: [], title: "" });

  if (!results || results.length === 0) {
    return <div>No styles found</div>;
  }
  const toggleGallery = (images: imageType[], title: string) => {
    setActiveImages({ images, title });
    setShowDisplay((prev) => !prev);
  };

  console.log(results);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1024px] mt-8 mx-auto justify-center">
        {loading &&
          Array.from({ length: 3 }, (_, idx) => {
            return (
              <Skeleton
                baseColor="#f5f5f5"
                highlightColor="#fff"
                width="100%"
                height="240px"
              />
            );
          })}

        {results.map((result) => (
          <div
            key={result.id}
            className="relative flex flex-col style items-start w-full shadow-xl bg-white rounded-xl"
          >
            <button className="relative h-full w-full aspect-[2/3] md:max-h-[460] lg:max-h-[360] max-h-full">
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
              <Image
                onClick={() => toggleGallery(result.style_image, result.title)}
                fill
                className="cursor-pointer rounded-tl-xl rounded-tr-xl object-cover object-top"
                loading="lazy"
                quality={100}
                onLoad={() => setIsImageLoading(false)}
                src={result.style_image[0].image}
                alt={result.style_image[0].image_alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 340px"
                // unoptimized={true}
              ></Image>
            </button>
            <article className="px-4 py-4 flex flex-wrap ">
              <h2 className="w-full m-0">{result.title}</h2>
              <h3>{result.description}</h3>
              <h3 className="w-full">Stylist: {result.stylist_name}</h3>
              <p className="w-full">Texture: {result?.texture}</p>
              <p className="w-full">Length: {result?.length}</p>
              <p className="w-full">Maintenance: {result?.maintenance}</p>
              <p className="w-full">Thickness: {result?.thickness}</p>
            </article>
          </div>
        ))}
      </div>
      {showDisplay &&
        createPortal(
          <StyleGallery
            handleLightbox={() => toggleGallery([], "")}
            showLightbox={showDisplay}
            imageInfo={activeImages}
          />,
          document.body
        )}
    </>
  );
};

export { StyleResults };
