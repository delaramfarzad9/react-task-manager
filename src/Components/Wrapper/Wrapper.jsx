import React from 'react'
import TodoInput from '../TodoList/TodoInput'
import TodoList from '../TodoList/TodoList'

export default function Wrapper() {
  return (
    <div className='bg-[#fbc193] p-4 sm:p-6 md:p-10 flex flex-col justify-center items-center   rounded-xl shadow-2xl  w-full max-w-3xl mx-auto  drop-shadow-2xl'>
      <TodoInput/>
<TodoList/>
    </div>
  )
}
