const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/";

/**
 * Fetches favorite styles from the API based on provided IDs.
 * @param ids - A comma-separated string of style IDs to fetch.
 * @returns A promise that resolves to an object containing the favorite styles.
 * @throws Error if the fetch request fails or if there's a network error.
 */

export const fetchFavorites = async (ids: string) => {
  try {
    const response = await fetch(`${url}favorites/?ids=${ids}`);
    const results = await response.json();
    return results;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to fetch favorites"
    );
  }
};
