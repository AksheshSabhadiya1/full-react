import React, { useEffect, useState } from "react";


function Multiple_useEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log("count upated");
        console.log(count)
    },[count])

    useEffect(()=>{
        document.title = `Hi, ${name} ${count}`
    },[name,count])

    return(
        <div>
            <div>
            <button onClick={() =>setCount(count+1)}>Count : {count}</button>
            </div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Multiple_useEffect