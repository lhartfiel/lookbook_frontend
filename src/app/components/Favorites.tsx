"use client";
import { useStyleStore } from "../state/store";
import { Card } from "./Common/Card";

const Favorites = () => {
  const { favorites } = useStyleStore();

  // Ensure favorites is an array
  const favoritesArray = Array.isArray(favorites) ? favorites : [];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1024px] my-8 mx-auto justify-center">
        <h1 className="col-span-full text-h1 font-bold text-primary-dark dark:text-white text-center">
          Your Favorites
        </h1>
        {favoritesArray.length > 0 ? (
          favoritesArray.map((fav) => <Card result={fav} key={fav.id} />)
        ) : (
          <p className="col-span-full text-center text-body dark:text-white">
            No favorites yet. Click the heart icon on any style to add it to
            your favorites!
          </p>
        )}
      </div>
    </>
  );
};

export { Favorites };
