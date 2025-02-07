import React from "react";
import { useMemo } from "react";
import { useState } from "react";


function UseMemoBasic(){

    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () =>{
        setCountOne(countOne + 1)
    } 

    const incrementTwo = () =>{
        setCountTwo(countTwo + 1)
    }
  
    const isEven = useMemo(() =>{
        let i=0
        while(i<200000000) i++
        return countOne % 2 === 0
    },[countOne]) 

    return(
        <div>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            <div>
                <button onClick={incrementOne}>Counter One {countOne}</button>
            </div><br />
            <div>
                <button onClick={incrementTwo}>Counter Two {countTwo}</button>
            </div>
        </div>
    )
}

export default UseMemoBasic