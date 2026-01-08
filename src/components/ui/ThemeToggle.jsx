import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        w-9 h-9 rounded-full
        flex items-center justify-center
        bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700
        border border-gray-300 dark:border-gray-600
        text-gray-700 dark:text-white
        transition
      "
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
};

export default ThemeToggle;
