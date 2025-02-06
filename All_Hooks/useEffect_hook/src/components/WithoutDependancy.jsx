import React, { useEffect, useState } from "react";


function WithoutDependancy() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount((count) => count + 1)
    }

    useEffect(() => {
        let time = setInterval(tick, 1000)

        return () => {
            clearInterval(time)
        }
    },[])

    return (
        <div>
            <h1>Timer value : {count}</h1>
        </div>
    )
}

export default WithoutDependancy