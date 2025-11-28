import React from 'react'

import TodoInput from '../TodoList/AddnewTaskModal'
import TodoList from '../TodoList/TodoList'



export default function Wrapper() {

  return (
    <div className='bg-rose-50 p-4 sm:p-6 md:p-10 flex flex-col justify-center items-center mt-5  rounded-xl shadow-xl  w-full max-w-3xl mx-auto  drop-shadow-xl'>
      
<TodoList/>

    </div>
  )
}
