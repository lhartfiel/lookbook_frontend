const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/";

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
