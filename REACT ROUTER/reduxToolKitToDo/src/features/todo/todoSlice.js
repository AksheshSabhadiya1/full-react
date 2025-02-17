import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'Hello world'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeToDo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateToDo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id 
                    ? { ...todo, text: action.payload.text } 
                    : todo
            );
            console.log(state.todos);
        }
        
    },
})

export const {addToDo, removeToDo, updateToDo} = todoSlice.actions

export default todoSlice.reducer