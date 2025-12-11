import React from 'react'
import { useState,useEffect } from 'react'
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
    useEffect(()=>{
      const localTodos=localStorage.getItem("todos");
if (localTodos){
  setTodos(JSON.parse(localTodos));
}
    },[])


  const addTodoHandler=(title,description,isImportant)=>{
    // Trim to remove spaces in  input
  if (!title.trim()) {
    setValidationMessage("Please enter a title before adding a task.");
    return; // stop here, don't add
  }
const newTodo={id:crypto.randomUUID(),title,description,isImportant,isCompleted: false };
setTodos([...todos,newTodo]);
setIsModalOpen(false);
localStorage.setItem("todos",JSON.stringify([...todos,newTodo]));
  }
  const completeTodoHandler=(id)=>{
    const updatedTodos=todos.map((todo)=>{
      if(todo.id===id){
        return { ...todo, isCompleted: !todo.isCompleted }; // toggle completed status
      }return todo;});
      setTodos(updatedTodos);
      localStorage.setItem("todos",JSON.stringify(updatedTodos));
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
 const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete);
  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  setTodoToDelete(null); // close modal
};

const handleCancelDelete = () => {
  setTodoToDelete(null); // close modal
};

const removeTodo=(id)=>{


const updatedTodos=todos.filter((todo)=>todo.id !==id);
setTodos(updatedTodos);
localStorage.setItem("todos",JSON.stringify(updatedTodos));};

const filteredTodos = ()=>{
  if (filter === "completed") 
    return todos.filter((todo) => todo.isCompleted);
    if (filter === "all")  return todos;
  if (filter === "pending") 
    return todos.filter((todo) => !todo.isCompleted);}

const noTasksMessage =
  todos.length === 0
    ? "No tasks yet — add your first one!"
    : filter === "completed"
    ? "No completed tasks yet"
    : filter === "pending"
    ? "No pending tasks yet"
    : "No tasks yet";

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
        <DropDown filter={filter} setFilter={setFilter} tasks={todos}/>
        
<Button onClick={() => {setIsModalOpen(true)}} className="flex gap-4 bg-blue-500 text-gray-200" btnTask="Create New">
<Svg svgId="add" className="text-yellow-300" />
</Button>

</div>
      
 {todos.length === 0 ? (
  <NoTaskYet message="No tasks yet — add your first one!" />
) : filteredTodos().length === 0 ? (
  <NoTaskYet message={noTasksMessage} />
) : (
  <>
    {/* Todo list */}
    <div className=" grid grid-cols-7 items-center justify-items-center  md:gap-4 mb-1 pb-2 font-bold text-gray-500">
      <div className="text-sm md:text-base  col-span-3 justify-self-start pl-3">Title</div>
      <div className='text-sm md:text-base pr-3'>Importance</div>
      <div className="text-sm md:text-base md:pr-3">Edit</div>
      <div className="text-sm md:text-base pr-3">Completion</div>
      <div className="text-sm md:text-base md:pr-5 ">Delete</div>
    </div>

    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {filteredTodos().map((todo) => (
          <EachTodo
            key={todo.id}
            {...todo}
            onDo={completeTodoHandler}
            onToggleImportant={toggleImportantHandler}
            onRemove={confirmRemoveTodo}
          />
        ))}
      </div>
    </section>
  </>
)}

    </div></>
  )
}
