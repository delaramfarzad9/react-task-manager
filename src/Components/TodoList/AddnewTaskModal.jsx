import React from 'react'
import Button from './Button'
import Svg from '../SvgSprite/Svg'
import { useState } from 'react'

export default function AddnewTaskModal({onClose}) {
const[title,setTitle]=useState("");
 const [description,setDescription]=useState("");
 const[isImportant,setIsImportant]=useState(false);

  return (
      
            <div className=' fixed inset-0 backdrop-blur-sm flex items-center justify-center  '>
           <div className=' relative flex flex-col gap-4 justify-center items-center bg-gray-100 pt-12 pb-6 px-6 rounded-xl shadow-xl border border-gray-300'>
            {/* close icon */}
<button onClick={onClose} aria-label="Close modal"
 className="absolute top-2 left-2  text-rose-600 hover:text-rose-800">
  <Svg svgId='close' />
</button>
               {/* inputs */}
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className='w-96 h-10 border p-4 border-indigo-500 rounded-xl shadow focus:placeholder-amber-300 placeholder-indigo-600 ' placeholder='New Task...' />
         <textarea value={description} onChange={(e)=>setDescription(e.target.value)} type="text" className=' w-96 h-40 border p-4 border-indigo-500 rounded-xl shadow focus:placeholder-amber-300 placeholder-indigo-600 ' placeholder='Description...' />
         {/* important checkbox */}
          <div className="flex flex-row-reverse self-start justify-center items-center gap-1 ml-2">
      <span className="text-rose-600/40">important</span>
          <input checked={isImportant} onChange={(e)=>setIsImportant(e.target.checked)} type="checkbox" className="w-4 h-4  cursor-pointer" />
     </div>
     {/* add new task button */}
        <Button btnTask="Add New Task" className="w-60 bg-cyan-500!" />
           </div>
        
    </div>
       
  )
}
