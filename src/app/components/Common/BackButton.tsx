import { useRouter } from "next/navigation";
import { Button } from "./Button";

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
