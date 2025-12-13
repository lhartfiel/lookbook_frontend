"use client";
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useStyleStore } from "../state/store";
import { fetchFavorites } from "../apis/fetch_favorites";

const FavoritesLoader = (): null => {
  const { favoriteIds, updateFavoriteIds, updateFavorites, favorites } =
    useStyleStore();
  const prevFavoriteIdsRef = useRef<string[]>([]);

  const { data } = useQuery({
    queryKey: ["favorites", favoriteIds],
    queryFn: () => fetchFavorites(favoriteIds.join(",")),
    enabled: favoriteIds.length > 0, // Only run when favoriteIds has items
  });

  useEffect(() => {
    // Initialize favoriteIds from localStorage on mount
    const localStorageStyles = localStorage.getItem("favorited") || "";
    if (localStorageStyles) {
      const idsArray = localStorageStyles.split(",").filter((id) => id !== "");
      updateFavoriteIds(idsArray);
    }
  }, [updateFavoriteIds]);

  useEffect(() => {
    // Update favorites in store when data is fetched
    if (data && "results" in data && Array.isArray(data.results)) {
      updateFavorites(data.results);
    } else if (Array.isArray(data)) {
      // In case the API returns an array directly
      updateFavorites(data);
    }
  }, [data, updateFavorites]);

  useEffect(() => {
    // Sync favorites array with favoriteIds - remove items that are no longer favorited
    // Only run if favoriteIds actually changed
    const favoriteIdsChanged =
      JSON.stringify(prevFavoriteIdsRef.current) !==
      JSON.stringify(favoriteIds);

    if (favoriteIdsChanged) {
      prevFavoriteIdsRef.current = favoriteIds;

      if (favoriteIds.length === 0) {
        updateFavorites([]);
      } else if (favorites.length > 0) {
        const filteredFavorites = favorites.filter((fav) =>
          favoriteIds.includes(fav.id.toString())
        );
        if (filteredFavorites.length !== favorites.length) {
          updateFavorites(filteredFavorites);
        }
      }
    }
  }, [favoriteIds, favorites, updateFavorites]);

  return null; // This component doesn't render anything
};

export { FavoritesLoader };
