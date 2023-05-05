import React, { useState } from "react";
export function Source(){
    const[count,setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);

    }
    return (
        <>
        <button onClick={increment}>increment</button>
        <p>{count}</p>
        <button onClick={decrement}>decrement</button>
        </>
    ) 


}

export default Source;