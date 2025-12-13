"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

interface ToggleModeProps {
  handleToggle: () => void;
  showDarkMode: boolean;
}
const ToggleMode = ({ handleToggle, showDarkMode }: ToggleModeProps) => {
  return (
    <button onClick={handleToggle}>
      <FontAwesomeIcon
        className="text-4xl dark:text-secondary cursor-pointer"
        icon={showDarkMode ? faToggleOn : faToggleOff}
      ></FontAwesomeIcon>
    </button>
  );
};

export { ToggleMode };
