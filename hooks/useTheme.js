import { useState } from "react";

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return { isDarkTheme, toggleTheme };
};
