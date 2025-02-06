import React, { useEffect, useState } from "react";

function TrackMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log("useEffect called");
        window.addEventListener('mousemove', mousePosition)

        return () =>  {
            console.log("component clean up");
            window.removeEventListener('mousemove', mousePosition)
        }
    },[])

    return(
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default TrackMouse