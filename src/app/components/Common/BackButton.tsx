import { useRouter } from "next/navigation";
import { Button } from "./Button";

/**
 * A back button component that navigates to the previous page when clicked.
 * @returns A JSX element representing the BackButton component.
 */

const BackButton = () => {
  const router = useRouter();
  return (
    <span className="col-start-1 col-span-full lg:col-start-3 lg:col-span-2 md:col-start-2 md:col-span-3 self-end flex-start">
      <Button
        arrowPosition="left"
        customClasses="justify-start dark:text-green-400 py-0 -ml-3"
        type="text"
        text="Back"
        callback={() => router.back()}
      ></Button>
    </span>
  );
};

export { BackButton };
