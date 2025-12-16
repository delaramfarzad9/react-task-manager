import React from 'react'

export default function Footer() {
  return (
    
           <footer className="bg-linear-to-t from-sky-700 dark:from-sky-700 to-blue-100 dark:to-gray-800 text-gray-600 dark:text-blue-100 text-sm p-4 flex flex-col-reverse  md:flex-row justify-between items-center ">
      <span>© 2025 My Task Manager</span>
      <span className="italic lg:mr-24">“Stay organized, stay creative.”</span>
      <div className="flex gap-4">
        <a href="https://github.com/delaramfarzad9/react-task-manager" className="hover:text-blue-300 text-lg">GitHub</a>
        {/* <a href="https://myportfolio.com" className="hover:text-rose-500">Portfolio</a> */}
      </div>
    </footer>
   
  )
}
