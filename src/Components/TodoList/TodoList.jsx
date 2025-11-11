import React from 'react'
import Button from './Button'
import EachTodo from './EachTodo'

export default function TodoList() {
  return (
    <div className='flex flex-col w-full'>
        {/* button'S wrap */}
       <div className='flex flex-wrap md:gap-4 justify-center md:justify-start'>
<Button className="bg-rose-100! text-gray-600!"  btnTask="All"/>
<Button  className="bg-rose-300! text-gray-600!" btnTask="Done"/>
<Button  className="bg-rose-300! text-gray-600!" btnTask="To do"/>
       </div>
  {/* Todo list*/}
      <div className="flex flex-col gap-4">
        <EachTodo />
        <EachTodo />
        <EachTodo />
      </div>

<div className='flex flex-row justify-between'>
<Button btnTask="Delete done tasks" className="bg-red-400!"/>
<Button btnTask="Delete all tasks" className="bg-red-400!"/>
</div>
    </div>
  )
}
