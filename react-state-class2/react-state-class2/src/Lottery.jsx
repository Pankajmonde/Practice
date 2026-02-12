
import {useState } from "react";

import {genTicket,sum} from "./Helper";
import Ticket from "./Ticket";
import Button from "./Button";



export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=sum(ticket)===winCondition;
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
             
            <Ticket ticket={ticket}/>
            <Button action={buyTicket}/>
            <h3>{isWinning &&"congraluation you won  "}</h3>

        </div>
    );
}