import Ludoboard from './ludoboard';
import Todolist from './Todolist';
import Lottery from './Lottery';
import './App.css'
import Ticket from './Ticket';
import { sum } from './Helper';


function App() {
  let WinCondition=(ticket)=>{
return sum(ticket)===15;
// return ticket.every ((num)==)
  }
 

  return  <>
  
  <Lottery n={3} winningSum={ WinCondition}/>
  </>;

}

export default App
