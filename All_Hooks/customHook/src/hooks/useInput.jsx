import { useState } from "react";


function useInput(initalvalue){

    const [value, setvalue] = useState(initalvalue)

    const reset = () =>{
        setvalue(initalvalue)
    }

    const bind = {
        value,
        onChange : e => {
            setvalue(e.target.value)
        }
    }

    return [value, bind, reset]
}

export default useInput
