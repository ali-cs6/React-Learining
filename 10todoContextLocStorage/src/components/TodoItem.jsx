import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false) //this state is for: whether our todo id editable or not
    const [todoMsg, setTodoMsg] = useState(todo.todo) //this pick the msg of todo we are editing, the first todo is the whole object while the 2nd one is the key (see TodoContext file, todos)
    const {updateTodo, deleteTodo, toggleComplete} = useTodoContext() //from todoConxt(useContext)

    //edit functionality
    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg}) // it expect id and todo as a whole, the todo is kept as it is with only one overwrite(todoMsg)
        setIsTodoEditable(true) //set editing true so we can edit it
    }

    // for UI change on toggle complete
    const toggleCompleted = () => { //this one locally named here, below one is from useTodoContext
        toggleComplete(todo.id) // as it expects id only
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
