import React, { useContext } from 'react';
import ThemeContext from '../Componets/ThemeContext';
import '../App.css'

const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme);
    console.log(toggleTheme);
   
    return (
      <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
  
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };
export default ThemedComponent
