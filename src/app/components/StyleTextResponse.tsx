import { useStyleStore } from "../state/store";
import { TypeAnimation } from "react-type-animation";

const StyleTextResponse = () => {
  const { aiResponse } = useStyleStore();
  return (
    <TypeAnimation
      sequence={[`${aiResponse}`, 1000]}
      wrapper="p"
      speed={75}
      className="text-body-primary font-medium text-body mt-6"
    />
  );
};

export { StyleTextResponse };
