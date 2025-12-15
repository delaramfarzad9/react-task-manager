import React from 'react'
import Svg from '../SvgSprite/Svg'

export default function DarkModeToggle({className}) {
  return (
<>
{/* light mode toggle  */}
    <div className={`flex flex-row-reverse  bg-gray-500 text-gray-900 font-bold rounded-full pl-2 pr-1 py-1 gap-1 items-center cursor-pointer shadow  ${className}`}>
        <div className='shadow-2xl inset-shadow-md flex justify-center items-center rounded-full bg-gray-300 p-2'>
            <Svg className="text-gray-500 text-shadow-zinc-700 " svgId="moon"/>
        </div>
        <div className='flex flex-col w-12 wrap-break-word justify-center items-center'>
            <span className='leading-none text-sm text-gray-400 text-shadow-md '>DARK MODE</span>
        
        </div>
    </div>
    {/* darkModeToggle */}
        <div className={` flex flex-row-reverse  bg-gray-100 text-gray-900 font-bold rounded-full pl-2 pr-1 py-1 gap-1 items-center cursor-pointer shadow inset-shadow-md ${className}`}>
        <div className='shadow-2xl  flex justify-center items-center rounded-full bg-gray-100 inset-shadow-md p-2'>
            <Svg className="text-gray-400 text-shadow-zinc-700 " svgId="sun"/>
        </div>
        <div className='flex flex-col w-12 wrap-break-word justify-center items-center'>
            <span className='leading-none text-sm text-gray-400 text-shadow-md '>LIGHT MODE</span>
        
        </div>
    </div>
    </>
  )
}
