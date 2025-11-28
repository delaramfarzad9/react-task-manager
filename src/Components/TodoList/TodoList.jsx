import React from 'react'
import { useState } from 'react'
import Button from './Button'
import EachTodo from './EachTodo'
import DropDown from '../DropDown/DropDown'
import AddnewTaskModal from '../TodoList/AddnewTaskModal'
import Svg from '../SvgSprite/Svg'

export default function TodoList() {
    const[isModalOpen,setIsModalOpen]=useState(false)
  return (
    <>
    {isModalOpen && <AddnewTaskModal onClose={()=>{setIsModalOpen(false)}}/>}
    <div className='flex flex-col w-full'>
        {/* button'S wrap */}
        
<div className='flex flex-row justify-between items-center'>
        <DropDown/>
        
<Button onClick={() => {setIsModalOpen(true)}} className="flex gap-4 " btnTask="Create New">
<Svg svgId="add" />
</Button>

</div>
      
  {/* Todo list*/}
      <div className="flex flex-col gap-4">
        <EachTodo />
        <EachTodo />
       
      </div>

<div className='flex flex-row justify-between'>
<Button btnTask="Delete done tasks" className="bg-red-400!"/>
<Button btnTask="Delete all tasks" className="bg-red-400!"/>
</div>
    </div></>
  )
}
