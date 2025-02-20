import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appwrite/auth_service";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        authservice.logout()
            .then(()=>{
                dispatch(logout())
                navigate('/')
            })
    }

    return(
        <button className="inline-block px-6 py-2 duration-200 hover:text-white cursor-pointer rounded-full"
                onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn