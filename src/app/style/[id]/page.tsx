import { StyleDetail } from "@/app/components/StyleDetail";

const StylePage = async ({ params }) => {
  console.log("params", params);
  const { result } = await params;
  return <StyleDetail result={result} />;
};

export default StylePage;
