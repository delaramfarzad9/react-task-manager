import React from 'react'
import Button from './Button'
import Svg from '../SvgSprite/Svg'
import { useState,useEffect } from 'react'

export default function AddnewTaskModal({onClose,addTodoHandler}) {
const[title,setTitle]=useState("");
 const [description,setDescription]=useState("");
 const[isImportant,setIsImportant]=useState(false);
useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  return (
      
            <div onClick={onClose} className=' fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center  '>
           <div onClick={(e) => e.stopPropagation()} className=' relative flex flex-col gap-4 justify-center items-center bg-gray-100 dark:bg-gray-200 pt-12 pb-6 px-6 rounded-xl shadow-xl border border-gray-300'>
            {/* close icon */}
<button onClick={onClose} aria-label="Close modal"
 className="absolute top-2 left-2  text-rose-600 hover:text-rose-800">
  <Svg svgId='close' />
</button>
               {/* inputs */}
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className='w-full max-w-sm md:w-96 h-10  border p-4 border-blue-500 rounded-xl shadow focus:placeholder-gray-300 placeholder-blue-600/50 ' placeholder='New Task...' />
         <textarea value={description} onChange={(e)=>setDescription(e.target.value)} type="text" className='w-full max-w-sm md:w-96 h-40 border p-4 border-blue-500 rounded-xl shadow focus:placeholder-gray-300 placeholder-blue-600/50 ' placeholder='Description...' />
         {/* important checkbox */}
          <div className="flex flex-row-reverse self-start justify-center items-center gap-1 ml-2">
      <span className="text-rose-600">important</span>
          <input checked={isImportant} onChange={(e)=>setIsImportant(e.target.checked)} type="checkbox" className="appearance-none w-4 h-4  rounded-full checked:bg-rose-600  border border-rose-600 cursor-pointer checked:border-rose-600" />
     </div>
     {/* add new task button */}
        <Button onClick={()=>addTodoHandler(title,description,isImportant)} btnTask="Add New Task" className="w-60 bg-blue-500 text-gray-200" />
           </div>
        
    </div>
       
  )
}
