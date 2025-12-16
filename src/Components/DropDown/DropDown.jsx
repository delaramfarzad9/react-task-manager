import React from 'react'
import Button from '../TodoList/Button'
import Svg from '../SvgSprite/Svg'
import { useState,useEffect } from 'react'

export default function DropDown({ filter, setFilter}) {

   const [open, setOpen] = useState(false);
   // Close on ESC
     useEffect(() => {
       const handleEsc = (e) => {
         if (e.key === "Escape") {
          setOpen(false);
         }
       };
       window.addEventListener("keydown", handleEsc);
       return () => window.removeEventListener("keydown", handleEsc);
     }, []);
       // Close on any click when open
  useEffect(() => {
    const handleClick = () => {
      if (open) setOpen(false)
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [open])
     const filterOptions = [
    { value: "completed", label: "Completed" },
    { value: "pending", label: "Pending" },
    { value: "all", label: "All Tasks" }
  ];
  
  const currentLabel =
    filterOptions.find(opt => opt.value === filter)?.label || "Task Category";
   
  return (
 <div className='relative inline-block text-left'>
  <Button    onClick={(e) => {
          e.stopPropagation() // prevent immediate close
          setOpen(!open)
        }} className="bg-blue-100 text-gray-600 flex  items-center  gap-2 md:gap-4 " >
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
