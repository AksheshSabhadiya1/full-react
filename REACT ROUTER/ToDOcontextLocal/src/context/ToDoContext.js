import { createContext, useContext } from "react";


export const ToDocontext = createContext({
    todos: [
        {
            id: 1,
            todo: "new msg",
            checkedStatus: false
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id,todo) => {},
    deleteToDo: (id) => {},
    toggleCheckedStatus: (id) => {}
})

export const ToDoProvider = ToDocontext.Provider

export const useToDo = () => {
    return useContext(ToDocontext)
}