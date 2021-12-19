import React, { useState, useEffect } from 'react'
import '../styles/Themebtn1.css';

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    }
    if (themeState) {
      localStorage.setItem('Theme', 'color');
      document.body.classList.remove('color-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') 
    return  document.body.classList.add('dark-mode');
    if (getTheme === 'color') 
    return  document.body.classList.remove('color-mode');
  }
  )
  return (
    <div>
      <button onClick={handleChange} className='custom-btn btn-1'>{themeState ? 'Dark Mode' : 'Lite Mode'}</button>
    </div>
  )
}
export default ThemeChanger