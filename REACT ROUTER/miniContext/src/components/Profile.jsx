import React from "react";
import { useContext } from "react";
import Usercontext from "../context/Usercontext";


function Profile(){

    const {user} = useContext(Usercontext)

    return !user ? <div>Please Login</div> : <div>Welcome {user.username}</div>
}

export default Profile