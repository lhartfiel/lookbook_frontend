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
  const [activeImages, setActiveImages] = useState<imageType[]>([]);

  if (!results || results.length === 0) {
    return <div>No styles found</div>;
  }
  const toggleGallery = (images: imageType[]) => {
    setActiveImages(images);
    setShowDisplay((prev) => !prev);
  };

  console.log(isImageLoading);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1024px] mx-auto justify-center">
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
            className="relative flex flex-wrap style w-full h-full"
          >
            <span className="relative min-h-[240px] h-full w-full">
              {isImageLoading && (
                <div className="absolute inset-0">
                  <Skeleton
                    baseColor="#f5f5f5"
                    highlightColor="#fff"
                    width="100%"
                    height="240px"
                  />
                </div>
              )}
              <Image
                onClick={() => toggleGallery(result.style_image)}
                fill
                className="flex w-full"
                priority={false}
                style={{ objectFit: "cover" }}
                // loading="lazy"
                onLoad={() => setIsImageLoading(false)}
                src={result.style_image[0].image}
                alt={result.style_image[0].image_alt}
                sizes="100vw"
              ></Image>
            </span>
            <h2 className="w-full">{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
      {showDisplay &&
        createPortal(
          <StyleGallery
            handleLightbox={() => toggleGallery([])}
            showLightbox={showDisplay}
            images={activeImages}
          />,
          document.body
        )}
    </>
  );
};

export { StyleResults };
