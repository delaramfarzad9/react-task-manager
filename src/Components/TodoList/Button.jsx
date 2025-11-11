import React from 'react'

export default function Button({btnTask,className}) {
  return (
   <button className={`bg-indigo-600 p-4 m-2 md:m-4 w-44 h-10 rounded flex items-center justify-center text-gray-800 shadow shadow-gray-400
        hover:scale-105 hover:shadow-xl hover:opacity-90
        transition-all duration-300 ease-in-out ${className}`}>{btnTask}</button>
  )
}