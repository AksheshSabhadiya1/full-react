import React, { useState } from "react";
import { useToDo } from "../context/ToDoContext";


function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateToDo, deleteToDo, toggleCheckedStatus} = useToDo()

    const editTodo = () =>{        
        updateToDo(todo.id,{...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () =>{
        toggleCheckedStatus(todo.id)
    } 


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.checkedStatus ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.checkedStatus}
                onChange={toggleCompleted}
                
            />
            <input
                type="text"
                className={`border outline-none w-full rounded-lg ${
                    isTodoEditable ? "bg-white px-2" : "border-transparent"
                } ${todo.checkedStatus ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg cursor-pointer text-sm border border-black justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 active:bg-blue-300"
                onClick={() => {
                    if (todo.checkedStatus) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);

                }}
                disabled={todo.checkedStatus}
               

            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 cursor-pointer rounded-lg text-sm border border-red-900 justify-center items-center bg-gray-50 shrink-0 hover:bg-red-300"
                onClick={() => deleteToDo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;