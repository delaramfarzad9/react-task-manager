import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import SvgSprite from './Components/SvgSprite/SvgSprite'
import Wrapper from './Components/Wrapper/Wrapper'
import Footer from './Components/Footer/Footer'



function App() {
 

  return (
    <>
    <SvgSprite/>
      <Wrapper/>
     
      <Footer/>

    </>
  )
}

export default App
