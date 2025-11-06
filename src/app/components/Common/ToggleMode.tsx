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
      {showDarkMode ? (
        <FontAwesomeIcon
          onClick={handleToggle}
          className="text-4xl dark:text-secondary cursor-pointer"
          icon={faToggleOn}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          onClick={handleToggle}
          className="text-4xl dark:text-secondary cursor-pointer"
          icon={faToggleOff}
        ></FontAwesomeIcon>
      )}
    </>
  );
};

export { ToggleMode };
