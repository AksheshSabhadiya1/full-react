import  React, { useState, useContext } from "react";
import Usercontext from "../context/Usercontext";


function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(Usercontext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <div>
            <h2>Login Form</h2>
            <input type="text" 
                   value={username}
                   onChange={e => setUsername(e.target.value)}
                   placeholder="Username"/> &nbsp;
            <input type="text"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   placeholder="Password"/> &nbsp;
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login