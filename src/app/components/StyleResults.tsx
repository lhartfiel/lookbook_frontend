interface imageType {
  id: number;
  image: string;
  image_alt: string;
  style: number;
  type: string;
  view: string;
}

interface resultsType {
  client_permission: boolean;
  created_at: string;
  description: string;
  id: number;
  length: string;
  maintenance: string;
  style_image: imageType[];
  stylist_name: string;
  tags: string[];
  texture: string;
  thickness: string;
  title: string;
  updated_at: string;
}

const StyleResults = ({ results }: { results?: resultsType[] }) => {
  if (!results || results.length === 0) {
    return <div>No styles found</div>;
  }

  return (
    <div className="flex w-full mx-auto justify-center">
      {results.map((result) => (
        <div key={result.id} className="style">
          <h2>{result.title}</h2>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export { StyleResults };
