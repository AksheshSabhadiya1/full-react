import React from "react";
import { useEffect, useState, useRef } from "react";



function HookTimer() {
    const [timer, setTimer] = useState(0)
    const [resume, setResume] = useState(0)

    const intervalRef = useRef()

    function resumeTimer(){
        setResume(intervalRef.current)
    }

    function resetTimer(){
        setTimer(0)
    }

    useEffect(()=>{
       intervalRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000);

        return () =>{
            clearInterval(intervalRef.current)
        }
    },[resume])

    return(
        <div>
            <h1>Hook Timer - {timer}</h1>
            <div>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop</button> <button onClick={resumeTimer}>Resume</button> <button onClick={resetTimer}>Reset</button>
            </div>
            
        </div>
    )
}

export default HookTimer