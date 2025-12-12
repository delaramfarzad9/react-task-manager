
import './App.css'
import TodoList from './Components/TodoList/TodoList'
import SvgSprite from './Components/SvgSprite/SvgSprite'
import Footer from './Components/Footer/Footer'



function App() {
 

  return (
    
    <div className="min-h-screen flex flex-col ">
      <SvgSprite />
     
        {/* app title */}
      <header className="bg-linear-to-b from-sky-200 to-blue-50 shadow-blue-50 p-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
          My Task Manager
        </h1>
        <p className="text-gray-500 italic">Stay organized, stay creative</p>
      </header>
      {/* main content */}
      <main className="flex-1 grow max-w-3xl mx-auto w-full p-6">
        <TodoList />
      </main>

      {/* footer always at bottom */}
      <Footer />
    </div>
  )
}

export default App
