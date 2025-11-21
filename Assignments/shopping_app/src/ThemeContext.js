import React, { createContext, useState } from 'react';

// Step 1: Create context
export const ThemeContext = createContext();

// Step 2: Create provider
export function ThemeProvider({ children }){
  const [theme, setTheme] = useState('light'); // default theme

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
