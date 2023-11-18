import React from "react";

const Button=({children,clickhandler})=>{
    console.log(`${children} rendered`)
    return(
        <div>
            <button onClick={clickhandler}>{children}</button>
        </div>
    )
}
export default React.memo(Button)