import React from "react";

function Count({text, Count}){
    console.log(`Rendering ${text}`);
    return(
        <div> {text} - {Count} </div>
    )
}

export default React.memo(Count)
// export default Count