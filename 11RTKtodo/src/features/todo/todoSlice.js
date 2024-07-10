//after creating/configuring store, we now have to create reducer
import {createSlice, nanoid} from '@reduxjs/toolkit' //slice is a bigger version of reducer, nanoid method generate random IDs

// how our store will look initially, we can use array/object
const initialState = {
     todos: [{id: 1, text: "Initial Todo"}]
}

export const todoSlice = createSlice({ // keys in this object is not our own, it is by default in RTK
    name: 'todo',
    initialState, // we can do the whole stuff here too as we did above separatly
    reducers: { // our functionality
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload //payload is the value not fixed but will be send via action
            }
            state.todos.push(todo) // add the new todo to the current state
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload) //fltr out whose id= that of action as it carries the id of the todo which is under any action
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, text: action.payload} : todo)
        }
    }
})

// necessary to use and make work out of these functions somewhere
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// necessary for the store to be aware of the reducer
export default todoSlice.reducer


// all the above exporting is syntax requirements and is necessary