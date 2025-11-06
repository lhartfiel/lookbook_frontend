"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

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
