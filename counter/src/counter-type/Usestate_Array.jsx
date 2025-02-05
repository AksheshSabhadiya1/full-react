import React from "react";
import { useState } from "react";


export default function Usestate_Array(){

    const [items, setitems] = useState([])

    const addItem = () =>{
        setitems([...items, {
            id : items.length,
            value : Math.floor(Math.random() * 10) + 1
        }])
    }

    return(
        <div>
            <button onClick={addItem}>Add Value</button>
            <ul>
                {
                    items.map( item => ( <li key={item.id}> {item.value} </li>))
                }
            </ul>
        </div>
    )
}