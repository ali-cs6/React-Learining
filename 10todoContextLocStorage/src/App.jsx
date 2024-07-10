import { useEffect, useState } from 'react'
import {ContextProvider} from './context'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([]) //this will propagate our todos to UI

  //to add another todo
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]) //prev is to hold the old array, then here create a new array first, pass an object to it (which will be the new todo), and all the previous todos. 
    //the object we passed, has a unique id (date/time) and the rest is the info from todoContext file 
  }

  // editing already existing todo
  const updateTodo = (id, todo) => { //id: with the help of which we will access that particular todo, todo: to edit it
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))) //prev is for the whole todos, map it, and each todo(prevTodo)'s id is matched with the one we are editing. place the new todo(edited one) or leave it as it is(prevTodo)
  }

  //to remove a todo from the list
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo)=> todo.id !== id )) //take prev array filter, take every todo in the filtered array except the one who's id matches the one we want to remove.
  }

  //for toggle button 
  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, 
          completed: !prevTodo.completed } : prevTodo)) //take the array map it and check for the specific todo via id
    //if matches: take the whole todo as it is and overwrite only complete option
    //if not: keep it as it is
  }

  //local storage
  useEffect(()=>{  //for getting items from local storage
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0 ) {
      setTodos(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <ContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      <div className="bg-[#172842] py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div
               className='w-full'
               key={todo.id}
              >
                <TodoItem todo={todo} />
              </div> 
            ))}
          </div>
        </div>
      </div>
    </ContextProvider>

  )
}

export default App
