import { useEffect, useState } from "react";
export default function Joker(){
    let[joke,setJoke]=useState({});

    const URL="https://official-joke-api.appspot.com/random_joke";
      
        const getNEwJoke=async()=>{
       
        let response=await fetch(URL)
        let jsonResponse=await response.json();
       
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});

     };
     useEffect(()=> {async function getfirstJoke() {
        let response=await fetch(URL)
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
     }
     getfirstJoke();    
    },[]);
    return (
        <div>
            <h1>Joker</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNEwJoke }>New Joke</button>
           
            
        </div>
    )
}