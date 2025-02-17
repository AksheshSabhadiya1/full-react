import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {addToDo} from '../features/todo/todoSlice'

function AddToDo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addToDoHandler = (e) =>{
        e.preventDefault()
        dispatch(addToDo(input))
        setInput('')
    }

    return(
        <div>
            <form onSubmit={addToDoHandler} className="space-x-3 mt-12">
                <input type="text"
                       className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-8 leading-8 transition-color duration-200 ease-in-out"

                       value={input}
                       placeholder="Enter Todo....."
                       onChange={(e) => setInput(e.target.value)}
                       />
                <button type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none bg-indigo-600 rounded text-lg">Add Todo</button>
            </form>
        </div>
    )
}

export default AddToDo