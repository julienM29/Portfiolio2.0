// ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const toggleTheme = () => setIsLight(prev => !prev);

  useEffect(() => {
    const body = document.body;
    if (!isLight) body.classList.add("dark");
    else body.classList.remove("dark");
  }, [isLight]);
  return (
    <ThemeContext.Provider value={{ isLight, setIsLight  }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
