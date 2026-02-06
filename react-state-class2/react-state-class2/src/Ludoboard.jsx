import { useState } from "react";
export default function Ludoboard(){
 let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
 let [arr,SetArr] = useState(["no moves"]);

     
let updateBlue = () => {
   
    
    // setMoves((preMoves) => {
    //     return { ...preMoves, blue: preMoves.blue + 1 };
    // });

    // arr.push("blue moves");
    SetArr(arr,"blue moves");
    console.log(arr);
};
let updateYellow = () => {
   
     
    setMoves((preMoves) => {
        return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
};

return  (<div>
        <p>Game begins</p> 
        <p>{arr}</p> 
        <div className="board">
        <p>blue moves={moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue} >+1</button>
        <p>Yellow moves={moves.yellow}</p>
        <button  style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
        <p>Green moves={moves.green}</p>
        <button style={{backgroundColor:"green"}}>+1</button>
        <p>Red moves={moves.red}</p>
        <button style={{backgroundColor:"red"}} >+1</button>

        </div>

        </div>
    )
}
