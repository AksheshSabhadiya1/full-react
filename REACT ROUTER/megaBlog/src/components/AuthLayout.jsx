import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({children, authentication=true}) {

    const [loader, setLoder] = useState(true)
    const authStatus = useSelector((state) => state.status)
    const navigate = useNavigate()

    useEffect(()=>{

        // if(authStatus === true){
        //     navigate('/')
        // }else if(authStatus === false){
        //     navigate('/login')
        // } else{
        //     navigate('/signup')
        // }
        

        // let authValue  = authStatus === true ? true : false

        
        if(authentication && authStatus !== authentication){
            navigate('/login')
        } else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoder(false)

    },[authStatus, authentication, navigate])

    return loader ? <h1>Loading....</h1> : <>{children}</>
}

export default Protected