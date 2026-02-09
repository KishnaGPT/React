
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './ThemeToggler.css'

export function ThemeToggler(){

  const { toggleTheme } = useContext(ThemeContext);

  return <>
    <div className="button-wrapper" style={{ marginBottom: '1rem' }}>
      <button className="theme-btn light" onClick={() => toggleTheme('light')}>🌞 Light Theme</button>
      <button className="theme-btn light" onClick={() => toggleTheme('dark')} style={{ marginLeft: '10px' }}>🌚 Dark Theme</button>
    </div>
  </>
}
