import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SvgSprite from './Components/SvgSprite/svgSprite'
import Wrapper from './Components/Wrapper/Wrapper'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SvgSprite/>
      <Wrapper/>
      

    </>
  )
}

export default App
