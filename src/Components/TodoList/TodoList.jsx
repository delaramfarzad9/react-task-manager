import React from 'react'
import { useState } from 'react'
import Button from './Button'
import EachTodo from './EachTodo'
import DropDown from '../DropDown/DropDown'
import AddnewTaskModal from '../TodoList/AddnewTaskModal'
import Svg from '../SvgSprite/Svg'
import NoTaskYet from '../NoTaskYet/NoTaskYet'
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal'
import ValidationModal from '../ValidationModal/ValidationModal'

export default function TodoList() {
    const[isModalOpen,setIsModalOpen]=useState(false)
    const[todos,setTodos]=useState([]);
    const [validationMessage, setValidationMessage] = useState("");
    const [filter, setFilter] = useState("all"); // all, completed, pending


  const addTodoHandler=(title,description,isImportant)=>{
    // Trim to remove spaces-only input
  if (!title.trim()) {
    setValidationMessage("Please enter a title before adding a task.");
    return; // stop here, don't add
  }
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
const [todoToDelete, setTodoToDelete] = useState(null);

const confirmRemoveTodo = (id) => {
  setTodoToDelete(id); // open modal
};

const handleConfirmDelete = () => {
  setTodos(todos.filter((todo) => todo.id !== todoToDelete));
  setTodoToDelete(null); // close modal
};

const handleCancelDelete = () => {
  setTodoToDelete(null); // close modal
};

const removeTodo=(id)=>{


const updatedTodos=todos.filter((todo)=>todo.id !==id);
setTodos(updatedTodos);};
const filteredTodos = ()=>{
  if (filter === "completed") 
    return todos.filter((todo) => todo.isCompleted);
    if (filter === "all")  return todos;
  if (filter === "pending") 
    return todos.filter((todo) => !todo.isCompleted);}
  return (
    <>
    {isModalOpen && <AddnewTaskModal onClose={()=>{setIsModalOpen(false)}} addTodoHandler={addTodoHandler}/>}
      {todoToDelete && (
  <DeleteConfirmModal
    onConfirm={handleConfirmDelete}
    onCancel={handleCancelDelete}
  />
)}
{validationMessage && (
  <ValidationModal
    message={validationMessage}
    onClose={() => setValidationMessage("")}
  />
)}

    <div className='flex flex-col w-full'>
        {/* button'S wrap */}
        
<div className='flex flex-row justify-between items-center mb-5 d:mb-0'>
        <DropDown filter={filter} setFilter={setFilter} />
        
<Button onClick={() => {setIsModalOpen(true)}} className="flex gap-4 bg-blue-500 text-gray-200" btnTask="Create New">
<Svg svgId="add" className="text-yellow-300" />
</Button>

</div>
      
 {todos.length ? ( <>{/* Todo list*/}
  {/* header row */}
<div className="hidden md:grid grid-cols-7 items-center justify-items-center  gap-4 mb-1  pb-2 font-bold text-gray-500">
  <div className="col-span-3 justify-self-start pl-3">Title</div>
  <div className="">Importance</div>
  <div className="pr-3">Edit</div>
  <div className="pr-3">Completion</div>
  <div className=" pr-5">Delete</div>
</div>
{/* All tasks */}
<section className='flex flex-col gap-4'>
{/*all tasks */}
      <div className="flex flex-col gap-4">
      {filteredTodos().map((todo)=>(
<EachTodo key={todo.id} {...todo} onDo={completeTodoHandler} onToggleImportant={toggleImportantHandler} onRemove={confirmRemoveTodo}  />
      ))}
        
      </div>
{/* completed tasks  */}
{todos.some((todo)=>todo.isCompleted) && (<div className='flex flex-col gap-4'>
 <p className='text-gray-500 font-bold pl-3'>Completed tasks</p>
{todos.filter((todo)=>todo.isCompleted) .map((todo)=>(<EachTodo key={todo.id} {...todo} onDo={completeTodoHandler} onToggleImportant={toggleImportantHandler} onRemove={removeTodo}  />)) }
</div>)}
{/* completed tasks  ends*/}
</section> </>) : (
<NoTaskYet/>
)}

    </div></>
  )
}
