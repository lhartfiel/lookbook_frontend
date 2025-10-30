import { useStyleStore } from "../state/store";
const StyleTextResponse = ({ text }: { text: string }) => {
  const { aiResponse } = useStyleStore();
  return (
    <p className="text-body-primary font-semibold text-body mt-6">
      {aiResponse}
    </p>
  );
};

export { StyleTextResponse };
