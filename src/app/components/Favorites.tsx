"use client";
import { useStyleStore } from "../state/store";
import { Card } from "./Common/Card";
import { BackButton } from "./Common/BackButton";
import { ResultsType } from "../types";

const Favorites = () => {
  const { favorites } = useStyleStore();

  // Ensure favorites is an array
  const favoritesArray: ResultsType[] = Array.isArray(favorites)
    ? favorites
    : [];

  return (
    <div className="col-span-full xl:col-span-10 xl:col-start-2 flex flex-col">
      <div className="grid grid-cols-12 gap-6 w-full max-w-[1024px] my-8 mx-auto justify-center">
        <div className="col-span-full xl:col-start-1">
          <BackButton />
        </div>

        <h1 className="col-span-full text-h1 font-bold text-primary-dark dark:text-white text-center">
          Your Favorites
        </h1>
        {favoritesArray.length > 0 ? (
          favoritesArray.map((fav) => (
            <div
              className="col-span-full md:col-span-6 lg:col-span-4"
              key={fav.id}
            >
              <Card result={fav} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-body dark:text-white">
            No favorites yet. Click the heart icon on any style to add it to
            your favorites!
          </p>
        )}
      </div>
    </div>
  );
};

export { Favorites };
