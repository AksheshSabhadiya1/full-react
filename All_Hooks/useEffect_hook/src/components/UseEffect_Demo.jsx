import react, { useEffect, useState } from "react";


function UseEffect_Demo() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `Count ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count} times</button>
        </div>
    )
}

export default UseEffect_Demo