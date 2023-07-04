import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

interface ThemeContextI {
  theme: ThemeMode;
  onThemeToggle: () => void;
}

/**
 * React Context
 * @interface ThemeMode
 * @description ThemeContext for Dark and Light Theme toggle.
 */
const ThemeContext = createContext<ThemeContextI>({
  theme: LIGHT_THEME,
  onThemeToggle: () => {},
});

type Props = {
  children: ReactNode;
};
export const ThemeProvider: React.FC<Props> = (props) => {
  const [theme, setTheme] = useState<ThemeMode>(LIGHT_THEME);
  useEffect(() => {
    if (theme) {
      const root = document.documentElement;
      root.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((curr) => (curr === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  };

  return (
    <ThemeContext.Provider value={{ theme, onThemeToggle: handleThemeToggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
