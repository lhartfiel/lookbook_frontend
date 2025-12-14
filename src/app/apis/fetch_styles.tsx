import { HairstyleType } from "../types";
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/";

/**
 * Fetches styles from the API based on a user's text query.
 * @param queryText - The user's search query describing their desired hairstyle.
 * @returns A promise that resolves to an object containing search results, AI response, and pagination data.
 * @throws Error if the fetch request fails or returns a non-ok status (i.e., any status code outside the 2xx range).
 */

interface FetchStylesResponse {
  count: number;
  results: HairstyleType[];
  aiResponse: string;
  next: string | null;
  previous: string | null;
}

export const fetchStyles = async (
  queryText: string
): Promise<FetchStylesResponse> => {

  try {
    const fullUrl = `${baseUrl}styles/search/`;
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: queryText }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      count: data.count,
      results: data.results || [],
      aiResponse: data.ai_response || "",
      next: data.next,
      previous: data.previous,
    };
  } catch (err) {
    console.error("Fetch error:", err);
    throw new Error("Failed to fetch styles");
  }
};
