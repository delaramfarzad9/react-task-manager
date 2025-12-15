import React from 'react'

export default function Footer() {
  return (
    
           <footer className="bg-linear-to-t from-sky-200 to-blue-50 text-gray-600 text-sm p-4 flex flex-col md:flex-row justify-between items-center ">
      <span>© 2025 My Task Manager</span>
      <span className="italic">“Stay organized, stay creative.”</span>
      <div className="flex gap-4">
        <a href="https://github.com/delaramfarzad9/react-task-manager" className="hover:text-rose-500">GitHub</a>
        {/* <a href="https://myportfolio.com" className="hover:text-rose-500">Portfolio</a> */}
      </div>
    </footer>
   
  )
}
