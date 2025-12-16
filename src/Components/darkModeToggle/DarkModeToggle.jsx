
import Svg from '../SvgSprite/Svg'
import React, { useState, useEffect } from 'react'

export default function DarkModeToggle({className}) {
    const [darkMode, setDarkMode] = useState(false)

 

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])
  return (
<>
<div  onClick={() => setDarkMode(!darkMode)}
      className={`cursor-pointer ${className}`}>
        <Svg
  svgId={darkMode ? "moon" : "sun"}
  className={`transition-transform duration-500 w-10 h-10 ${darkMode ? "rotate-0 text-gray-300" : "rotate-180 text-yellow-400"}`}
/>

   
</div>

    </>
  )
}
