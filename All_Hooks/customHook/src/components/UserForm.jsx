import React, { useState } from "react";
import useInput from "../hooks/useInput";


function UserForm(){

    const [firstname, bindFirstname, resetFirstname] = useInput('')  
    const [lastname, bindLastname, resetLastname] = useInput('')  

    const submitHandler = (e) =>{
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstname()
        resetLastname()
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    Firstname <input type="text" 
                                     {...bindFirstname} 
                                    />
                </div>
                <div>
                    Lastname <input type="text" 
                                     {...bindLastname} 
                                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm