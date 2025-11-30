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
  const completeTodoHandler=(id)=>{
    const updatedTodos=todos.map((todo)=>{
      if(todo.id===id){
        return { ...todo, isCompleted: !todo.isCompleted }; // toggle completed status
      }return todo;});
      setTodos(updatedTodos);
  }
  const toggleImportantHandler = (id) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isImportant: !todo.isImportant }; // toggle importance
    }
    return todo;
  });
  setTodos(updatedTodos);
};
const removeTodo=(id)=>{


const updatedTodos=todos.filter((todo)=>todo.id !==id);
setTodos(updatedTodos);};

  return (
    <>
    {isModalOpen && <AddnewTaskModal onClose={()=>{setIsModalOpen(false)}} addTodoHandler={addTodoHandler}/>}
    <div className='flex flex-col w-full'>
        {/* button'S wrap */}
        
<div className='flex flex-row justify-between items-center'>
        <DropDown/>
        
<Button onClick={() => {setIsModalOpen(true)}} className="flex gap-4 bg-blue-500 text-gray-200" btnTask="Create New">
<Svg svgId="add" className="text-yellow-300" />
</Button>

</div>
      
  {/* Todo list*/}
  {/* header row */}
<div className="hidden md:grid grid-cols-7 items-center justify-items-center  gap-4 mb-1 mt-10 pb-2 font-bold ">
  <div className="col-span-3 justify-self-start pl-3">Title</div>
  <div className="">Importance</div>
  <div className="pr-3">Edit</div>
  <div className="pr-3">Completion</div>
  <div className=" pr-5">Delete</div>
</div>
{/* tasks */}
      <div className="flex flex-col gap-4">
      {todos.map((todo)=>(
<EachTodo key={todo.id} {...todo} onDo={completeTodoHandler} onToggleImportant={toggleImportantHandler} onRemove={removeTodo}  />
      ))}
        
       
      </div>



{/* <div className='flex flex-row justify-between'>
<Button btnTask="Delete done tasks" className="bg-red-400!"/>
<Button btnTask="Delete all tasks" className="bg-red-400!"/>
</div> */}
    </div></>
  )
}
