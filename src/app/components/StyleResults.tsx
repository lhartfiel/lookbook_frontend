"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StyleGallery } from "./StyleGallery";
import { Button } from "./Common/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useStyleStore } from "../state/store";

export interface ImageType {
  id: number;
  image: string;
  image_alt: string;
  style: number;
  type: string;
  view: string;
}

export interface ResultsType {
  client_permission: boolean;
  created_at: string;
  description: string;
  id: number;
  length: string;
  maintenance: string;
  style_image: ImageType[];
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

const StyleResults = ({ loading }: { loading: boolean }) => {
  const { results, setSelectedStyle } = useStyleStore();
  const router = useRouter();
  const [showDisplay, setShowDisplay] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [activeImages, setActiveImages] = useState({ images: [], title: "" });

  if (!results || results.length === 0) {
    return <div>No styles found</div>;
  }
  const toggleGallery = (images: ImageType[], title: string) => {
    setActiveImages({ images, title });
    setShowDisplay((prev) => !prev);
  };

  const goToStyle = (e: React.MouseEvent, result: ResultsType) => {
    e.preventDefault();
    setSelectedStyle(result);
    router.push(`/style/${result.id}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1024px] my-8 mx-auto justify-center">
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
            className="relative flex flex-col style items-start w-full drop-shadow-xl dark:drop-shadow-2xl hover:3xl bg-white rounded-xl"
          >
            <button className="relative h-full w-full aspect-[2/3] md:max-h-[460px] lg:max-h-[320px] max-h-full">
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
              ></Image>
            </button>
            <article className="px-4 py-4 flex flex-wrap ">
              <h2 className="text-h2 font-bold w-full m-0">{result.title}</h2>
              <h3 className="text-h3 w-full">Stylist: {result.stylist_name}</h3>
              <p className="text-body mt-4">{result.description}</p>
            </article>
            <Button
              customClasses="justify-end"
              text="See Style Details"
              type="text"
              callback={(e) => goToStyle(e, result)}
            ></Button>
          </div>
        ))}
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

export { StyleResults };
