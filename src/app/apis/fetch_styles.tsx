const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/";

console.log("Base URL:", baseUrl);
export const fetchStyles = async (queryText: string) => {
  try {
    const fullUrl = `${baseUrl}styles/search/`;
    console.log("Full URL:", fullUrl);
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
