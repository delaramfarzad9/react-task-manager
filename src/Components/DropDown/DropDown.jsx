import React from 'react'
import Button from '../TodoList/Button'
import Svg from '../SvgSprite/Svg'
import { useState } from 'react'

export default function DropDown({ filter, setFilter }) {
   const [open, setOpen] = useState(false);
  return (
 <div className='relative inline-block text-left'>
  <Button onClick={()=>setOpen(!open)} className="bg-blue-100 text-gray-600 flex flex-row items-center gap-4 " >
    <span>{filter==="pending" ? "Pending" : filter==="completed" ? "Completed" : "All Tasks"}</span>
    <Svg  className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`} svgId="chevron-down"/>
    </Button> 
    {/* Dropdown menu */}
{ open && (    <div className='absolute '>
      <div className="flex flex-col ml-4 -mt-3">
        <Button onClick={() => { setFilter("completed") }} className="m-0!" btnTask="completed"/>
      <Button onClick={() => { setFilter("pending") }} className="m-0!" btnTask="pending"/>
      <Button onClick={() => { setFilter("all") }} className="m-0!" btnTask="All Tasks"/>
      </div>
    </div>)}

 </div>

  )
}
