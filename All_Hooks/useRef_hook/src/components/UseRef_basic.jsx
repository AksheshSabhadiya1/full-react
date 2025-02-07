import React from "react";
import { useEffect, useRef } from "react";

function UseRef_basic(){

    const inputRef = useRef(null)

    useEffect(()=>{
        //focus the input element
        inputRef.current.focus()
    },[])

    return(
        <div>
            Username: <input type="text" ref={inputRef} placeholder="Enter username" />
        </div>
    )
}

export default UseRef_basic