import React, { useState } from "react";
import TrackMouse from "./TrackMouse";

function MouseContainer(){

    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <TrackMouse />}
        </div>
    )
}

export default MouseContainer