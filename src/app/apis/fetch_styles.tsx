const url =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/styles/search/";

export const fetchStyles = async (queryText: string) => {
  try {
    const response = await fetch(url, {
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
    console.log("dataRes", data);
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
