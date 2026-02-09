import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({children}){

    const [theme, setTheme] = useState("light");

    const toggleTheme = (newTheme) =>{setTheme(newTheme)}

    const themeStyles = {

        light: {
        backgroundColor: '#ffffff',
        color: '#333',
        },

        dark: {
        backgroundColor: '#1a1a1a',
        color: '#f1f1f1',
        }
    }

    return<>
        <ThemeContext.Provider value={{theme, toggleTheme, themeStyles}}>
            {children}
        </ThemeContext.Provider>
    </>
}