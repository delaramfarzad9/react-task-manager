import React from 'react'

export default function Footer() {
  return (
    
           <footer className=" text-gray-600 text-sm p-4 flex flex-col md:flex-row justify-between items-center border-t">
      <span>© 2025 My Task Manager</span>
      <span className="italic">“Stay organized, stay creative.”</span>
      <div className="flex gap-4">
        <a href="https://github.com/yourusername/react-task-manager" className="hover:text-rose-500">GitHub</a>
        <a href="https://yourportfolio.com" className="hover:text-rose-500">Portfolio</a>
      </div>
    </footer>
   
  )
}
