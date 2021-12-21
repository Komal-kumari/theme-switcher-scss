import React, { useState, useEffect } from 'react'
import '../styles/Themebtn2.scss';

const ThemeChanger2 = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'color');
      document.body.classList.add('color-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('color-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'color') 
    return  document.body.classList.add('color-mode');
    
  })
  return (
    <div>
      <button onClick={handleChange} className='custom-btn btn-2'>{themeState ? 'Color Mode' : 'Lite Mode'}</button>
    </div>
  )
}
export default ThemeChanger2