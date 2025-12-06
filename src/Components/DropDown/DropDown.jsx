import React from 'react'
import Button from '../TodoList/Button'
import Svg from '../SvgSprite/Svg'
import { useState } from 'react'

export default function DropDown({ filter, setFilter }) {

   const [open, setOpen] = useState(false);
     const filterOptions = [
    { value: "completed", label: "Completed" },
    { value: "pending", label: "Pending" },
    { value: "all", label: "All Tasks" }
  ];
  // Helper to display the current filter label
  const currentLabel =
    filterOptions.find(opt => opt.value === filter)?.label || "Task Category";
   
  return (
 <div className='relative inline-block text-left'>
  <Button onClick={()=>setOpen(!open)} className="bg-blue-100 text-gray-600 flex flex-row items-center gap-4 " >
    <span>{currentLabel}</span>
    <Svg  className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`} svgId="chevron-down"/>
    </Button> 
    {/* Dropdown menu */}
{ open && (    <div className='absolute '>
      <div role="menu" className="flex flex-col ml-4 -mt-3">
        {filterOptions.map(opt => (
              <Button
                key={opt.value}
                onClick={() => {
                  setFilter(opt.value);
                  setOpen(false); // auto-close after selection
                }}
                className="m-0! bg-gray-200 backdrop-blur-sm"
                btnTask={opt.label}
                role="menuitem"
              />
            ))}

      </div>
    </div>)}

      
 </div>

  )
}
