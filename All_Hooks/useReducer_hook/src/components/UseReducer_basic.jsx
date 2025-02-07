import React, { useReducer } from "react";


const initalstate = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1 
        case 'reset':
            return initalstate
        default:
            return state
    }
}


function UseReducer_basic(){

    const [count, dispatch] = useReducer(reducer, initalstate)

    return(
        <div>
            <h1>Count value : {count}  </h1>
            <button onClick={() => dispatch('increment') } disabled={count == 10}>Increment</button>
            <button onClick={() => (count>0) ? dispatch('decrement'): ''}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer_basic