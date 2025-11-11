import React from 'react'
import Button from './Button'

export default function TodoInput() {
  return (
      
            <div className='flex flex-col items-center gap-4'>
              
        <input type="text" className='w-96 h-10 border p-4 border-indigo-500 rounded-xl shadow focus:placeholder-amber-300 placeholder-indigo-600 ' placeholder='New Todo...' />
        <Button btnTask="Add New Task" className="w-60 bg-cyan-500!" />
        
    </div>
       
  )
}
