import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type ButtonType = "text" | "button" | "submit";
type ArrowPosition = "right" | "left";

type CallbackFunction = (
  event?: React.MouseEvent<HTMLButtonElement>,
  ...args: any[]
) => void;

const Button = ({
  arrowPosition = "right",
  customClasses,
  type,
  text,
  callback,
}: {
  arrowPosition?: string;
  customClasses?: string;
  type: ButtonType;
  text: string;
  callback?: CallbackFunction;
}) => {
  return (
    <>
      {(type === "submit" || type === "button") && (
        <button
          onClick={callback}
          type={`${type === "submit" ? "submit" : "button"}`}
          className="flex items-center group bg-primary font-semibold transition duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-secondary cursor-pointer text-white px-4 py-2 rounded-4xl mt-4 self-end mr-0 ml-auto"
        >
          {text}

          <FontAwesomeIcon
            icon={faArrowRight}
            className="relative text-[0px] group-hover:text-lg text-white text-right pl-1 transition-all ease-in-out duration-400 translate-x-0 group-hover:translate-x-2"
          />
        </button>
      )}
      {type === "text" && (
        <button
          onClick={callback}
          className={`group flex items-center cursor-pointer text-primary w-full font-bold px-3 py-4 transition duration-700 decoration-transparent hover:decoration-primary underline underline-offset-0 hover:underline-offset-2 ${customClasses}`}
        >
          {arrowPosition === "left" && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={`relative text-primary text-lg text-right pr-1 transition ease-in-out duration-300 translate-x-0 group-hover:-translate-x-2 ${customClasses}`}
            />
          )}
          {text}
          {arrowPosition === "right" && (
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`relative text-primary text-lg text-right pl-1 transition ease-in-out duration-300 translate-x-0 group-hover:translate-x-2 ${customClasses}`}
            />
          )}
        </button>
      )}
    </>
  );
};

export { Button };
