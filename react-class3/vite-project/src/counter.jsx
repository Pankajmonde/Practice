import { useState,useEffect } from "react"
export default function Counter(){
    let [count,setCount]=useState(0);
    let inCount=()=>{
        setCount((currCount)=>currCount+1);
    };

    useEffect(function printSomething(){
        console.log("something");
    },
    [count] //dependency array
    );


    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={inCount}>+1</button>
        </div>
    )
}