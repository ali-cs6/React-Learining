//after creating/configuring store, we now have to create reducer
import {createSlice, nanoid} from '@reduxjs/toolkit' //slice is a bigger version of reducer, nanoid method generate random IDs

// how our store will look initially, we can use array/object
const initialState = {
     todos: [{id: 1, text: "Initial Todo"}]
}

export const todoSlice = createSlice({ // keys in this object is not our own, it is by default in RTK
    name: 'todo',
    initialState, // we can do the whole stuff here too as we did above separatly
    reducers: { 
        
    }
})