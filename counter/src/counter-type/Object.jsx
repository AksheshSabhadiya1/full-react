import React from "react"
import { useState } from "react"

function Object(){

    const [name, setName] = useState({firstname : "",lastname : ""})

    return(
        <div>            
            <h3>firstname : {name.firstname}</h3>
            <h3>lastname : {name.lastname}</h3><br />
            firstname : 
            <input 
                type="text"
                value={name.firstname}     
                onChange={(e) => setName({...name, firstname : e.target.value})}       
            /><br />

            Lastname : 
            <input 
                type="text" 
                value={name.lastname}
                onChange={(e) => setName({...name, lastname : e.target.value})}            
            />

        </div>
    )
}

export default Object