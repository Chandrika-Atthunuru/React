import React from "react";
import { useNavigate } from "react-router-dom";

const Success=()=>{
    const navigate= useNavigate();
    const changehandler=()=>{
        navigate('/')
    }
    return(
        <>
       <div>Login Successfully</div>
       <button onClick={changehandler}>back to home</button> 
        </>
    )
}
export default Success