// ThemedComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemedComponent(){
  const { theme, themeStyles } = useContext(ThemeContext);

  return<>
    <div style={{ ...themeStyles[theme], padding: '1rem', borderRadius: '10px' }}>
      <h2>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h2>
      <p>This component changes its style based on the selected theme.</p>
    </div>
  </>
}


