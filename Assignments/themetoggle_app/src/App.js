// App.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./style.css"; // Add your light and dark styles here

export function App(){
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <>
    <div className={`app ${theme}`}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  </>
}

