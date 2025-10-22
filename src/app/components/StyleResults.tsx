"use client";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { StyleGallery } from "./StyleGallery";

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

const StyleResults = ({ results }: { results?: resultsType[] }) => {
  const [showDisplay, setShowDisplay] = useState(false);
  const [activeImages, setActiveImages] = useState<imageType[]>([]);

  if (!results || results.length === 0) {
    return <div>No styles found</div>;
  }
  const toggleGallery = (images: imageType[]) => {
    setActiveImages(images);
    setShowDisplay((prev) => !prev);
  };
  console.log(results);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1024px] mx-auto justify-center">
        {results.map((result) => (
          <div
            key={result.id}
            className="relative flex flex-wrap style w-full h-full"
          >
            <span className="relative min-h-[240px] h-full w-full">
              <Image
                onClick={() => toggleGallery(result.style_image)}
                fill
                className="flex w-full"
                priority={false}
                objectFit="cover"
                src={result.style_image[0].image}
                alt={result.style_image[0].image_alt}
                sizes="auto"
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
