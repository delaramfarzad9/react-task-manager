import React from 'react'
import { useState } from 'react'
import Button from './Button'
import EachTodo from './EachTodo'
import DropDown from '../DropDown/DropDown'
import AddnewTaskModal from '../TodoList/AddnewTaskModal'
import Svg from '../SvgSprite/Svg'

export default function TodoList() {
    const[isModalOpen,setIsModalOpen]=useState(false)
    const[todos,setTodos]=useState([]);
  const addTodoHandler=(title,description,isImportant)=>{
const newTodo={id:crypto.randomUUID(),title,description,isImportant,completed:false};
setTodos([...todos,newTodo]);
setIsModalOpen(false);
  }
  return (
    <>
    {isModalOpen && <AddnewTaskModal onClose={()=>{setIsModalOpen(false)}} addTodoHandler={addTodoHandler}/>}
    <div className='flex flex-col w-full'>
        {/* button'S wrap */}
        
<div className='flex flex-row justify-between items-center'>
        <DropDown/>
        
<Button onClick={() => {setIsModalOpen(true)}} className="flex gap-4 bg-blue-500 text-gray-200" btnTask="Create New">
<Svg svgId="add" />
</Button>

</div>
      
  {/* Todo list*/}
      <div className="flex flex-col gap-4">
      {todos.map((todo)=>(
<EachTodo key={todo.id} {...todo} />
      ))}
        
       
      </div>

{/* <div className='flex flex-row justify-between'>
<Button btnTask="Delete done tasks" className="bg-red-400!"/>
<Button btnTask="Delete all tasks" className="bg-red-400!"/>
</div> */}
    </div></>
  )
}
