import { useStyleStore } from "../state/store";
import { TypeAnimation } from "react-type-animation";

/**
 * A component that displays the AI-generated style response with a typing animation.
 * @returns A JSX element representing the StyleTextResponse component.
 */

const StyleTextResponse = () => {
  const { aiResponse, aiResponseInitialized } = useStyleStore();
  return (
    <div className="w-full mx-auto max-w-[1024px]">
      {aiResponseInitialized ? (
        <TypeAnimation
          sequence={[`${aiResponse}`, 1000]}
          wrapper="p"
          speed={99}
          className="text-body-primary dark:text-light font-medium text-body mt-6"
        />
      ) : (
        <p className="text-body-primary dark:text-light font-medium text-body mt-6">
          {aiResponse}
        </p>
      )}
    </div>
  );
};

export { StyleTextResponse };
