const url =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/styles/";

export const fetchStyles = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      count: data.count,
      results: data.results || [],
      next: data.next,
      previous: data.previous,
    };
  } catch (err) {
    console.error("Fetch error:", err);
    throw new Error("Failed to fetch styles");
  }
};
