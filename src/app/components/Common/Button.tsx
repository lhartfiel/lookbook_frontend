import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

/**
 * A versatile button component that can function as a text link, a standard button, or a submit button.
 * @param arrowPosition (optional) - Position of the arrow icon ("right" or "left").
 * @param childItems (optional) - Additional React nodes to be rendered inside the button.
 * @param customClasses (optional) - Custom CSS classes to apply to the button.
 * @param type - Type of the button ("text", "button", or "submit").
 * @param text - Text to be displayed on the button.
 * @param callback (optional) - Function to be called when the button is clicked.
 * @returns A JSX element representing the Button component.
 */

type ButtonType = "text" | "button" | "submit";
type ArrowPosition = "right" | "left";

type CallbackFunction =
  | ((event: React.MouseEvent<HTMLButtonElement>) => void)
  | (() => void);

const Button = ({
  arrowPosition,
  childItems,
  customClasses,
  type,
  text,
  callback,
}: {
  arrowPosition?: ArrowPosition;
  childItems?: React.ReactNode;
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
          className="flex  group bg-primary font-semibold items-center transition duration-300 ease-in-out hover:bg-primary-dark dark:hover:bg-secondary cursor-pointer text-white px-4 py-2 rounded-4xl mt-4 self-end mr-0 ml-auto"
        >
          {text}

          <FontAwesomeIcon
            icon={faArrowRight}
            className="relative block text-[1px] -z-1 items-center group-hover:text-lg group-hover:z-10 text-white text-right pl-1 transition-all ease-in-out duration-400 translate-x-0 group-hover:translate-x-2"
          />
        </button>
      )}
      {type === "text" && (
        <button
          onClick={callback}
          className={`group flex items-center cursor-pointer text-primary-dark w-full font-bold px-3 py-4 transition duration-700 decoration-transparent hover:decoration-primary-dark underline underline-offset-0 hover:underline-offset-2 ${customClasses}`}
        >
          {arrowPosition === "left" && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={`relative text-primary-dark text-lg text-right pr-1 transition ease-in-out duration-300 translate-x-0 group-hover:-translate-x-2 ${customClasses}`}
            />
          )}
          {childItems}
          {text}
          {arrowPosition === "right" && (
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`relative text-primary-dark text-lg text-right pl-1 transition ease-in-out duration-300 translate-x-0 group-hover:translate-x-2 ${customClasses}`}
            />
          )}
        </button>
      )}
    </>
  );
};

export { Button };
