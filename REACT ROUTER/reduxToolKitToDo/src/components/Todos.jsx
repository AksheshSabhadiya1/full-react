// import React, {useState} from "react";
// import {useSelector, useDispatch} from 'react-redux'
// import {removeToDo, updateToDo} from '../features/todo/todoSlice'

// function Todos() {

        
//     const todos = useSelector(state => state.todos)
//     const dispatch = useDispatch()

//     return(
//         <div>
//             {
//                 todos.map((todo) => (
//                     <div key={todo.id} className="w-full px-4 py-4 gap-y-3"> 
//                         <input type="text" 
//                                value={todo.text} 
//                                className="border outline-none w-full/2 py-2 text-center" 
//                                />
                               
//                         <button className="mx-2" onClick={() => dispatch(updateToDo(todo.id))}>Update</button>
//                         <button onClick={() => dispatch(removeToDo(todo.id))}>❌</button>
//                     </div>
                   
//                 ))
//             }
//         </div>
//     )
// }

// export default Todos

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToDo, updateToDo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
    const [editTexts, setEditTexts] = useState({});
    const [edit, setEdit] = useState({})

    const handleInputChange = (id, value) => {
        setEditTexts({ ...editTexts, [id]: value });
        setEdit({...edit, [id]:true})
    };

    const handleUpdate = (id) => {
        const updatedText = editTexts[id];
        if (updatedText !== undefined && updatedText.trim() !== "") {
            dispatch(updateToDo({ id, text: updatedText }));
            setEdit({...edit, [id]:false})
        }
    };


    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} className="w-full px-4 py-4 gap-y-3 flex items-center"> 
                    <input
                        type="text"
                        value={editTexts[todo.id] ?? todo.text}
                        className={`border outline-none w-1/2 py-2 text-center mr-2 focus:border-blue-600`}
                        onChange={(e) => handleInputChange(todo.id, e.target.value)}
                    />
                    <button
                        className="mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => handleUpdate(todo.id)}   
                    >
                        {
                            edit[todo.id] ? "Save" : "Update"
                        }
                      
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => dispatch(removeToDo(todo.id))}
                    >
                        ❌
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Todos;
