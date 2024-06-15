import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'


function AddTodo() {
    const [input, setInput] = useState('') //this is for input box
    const dispatch = useDispatch() // usedispatch is to add/change value in store

    const addTodoHandler = (e)=>{ //on clicking to add a todo
        e.preventDefault() // to prevent form submiting behavior
        if(input.length > 0){
            dispatch(addTodo(input)) //todo added to the store like this
            setInput('') //this will make the input box empty again
        }
        
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      )
}

export default AddTodo