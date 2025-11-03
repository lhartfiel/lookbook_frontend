import { useStyleStore } from "../state/store";
import { TypeAnimation } from "react-type-animation";

const StyleTextResponse = () => {
  const { aiResponse, aiResponseInitialized } = useStyleStore();
  console.log("aire", aiResponseInitialized);
  return (
    <>
      {aiResponseInitialized ? (
        <TypeAnimation
          sequence={[`${aiResponse}`, 1000]}
          wrapper="p"
          speed={99}
          className="text-body-primary font-medium text-body mt-6"
        />
      ) : (
        <p>{aiResponse}</p>
      )}
    </>
  );
};

export { StyleTextResponse };
