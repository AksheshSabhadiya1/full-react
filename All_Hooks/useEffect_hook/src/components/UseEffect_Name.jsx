
import React, { useEffect, useState } from "react";


function UseEffect_Name(){

    const [count, setCount] = useState(0)

    const [name, setName] = useState('')

    useEffect(()=>{
        console.log("updated");
        document.title = `You Click ${count} times`
    },[count])

    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count {count} Times</button>
        </div>
    )
}

export default UseEffect_Name