"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

/**
 * A toggle mode component that switches between dark and light modes.
 * @param handleToggle - Function to be called when the toggle button is clicked.
 * @param showDarkMode - Boolean indicating whether dark mode is currently active.
 * @returns A JSX element representing the ToggleMode component.
 */

const ToggleMode = ({
  handleToggle,
  showDarkMode,
}: {
  handleToggle: () => void;
  showDarkMode: boolean;
}) => {
  return (
    <>
      <button onClick={handleToggle}>
        <FontAwesomeIcon
          className="text-4xl dark:text-secondary cursor-pointer"
          icon={showDarkMode ? faToggleOn : faToggleOff}
        ></FontAwesomeIcon>
      </button>
    </>
  );
};

export { ToggleMode };
