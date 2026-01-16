import { useState } from "react";

function init(){
    console.log("init was excuted")
    return Math.random();
}

export default function Counter(){
      let [count ,setcount]= useState(init());//initial value of count is 0
    // console.log("rendering counter");  //render how it work
    // console.log(`count=${count}`);
      console.log("componenet was rerender")
     let inCount =()=>{
        setcount((currCount)=>{
            return currCount +1;
        // setcount(count + 1);
        });
        setcount((currCount)=>{
            return currCount+1;
        });
        // setcount((currCount)=>{
        //     return currCount+1;
        // });
        // setcount(20);

        // console.log(`inside inCount count=${count}`); 
     };
     
    
    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={inCount}>incrase count </button>
        </div>
    
    
    );
} 
 