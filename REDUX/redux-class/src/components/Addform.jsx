
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";
export default function Addform() {
    const [task,setTask]=useState("");
    const dispatch=useDispatch();

    const submitHandler=(evt)=>{
        evt.preventDefault();
        console.log("form submitted",task);
        dispatch(addTodo(task))
    };
  return (
    <>
     <form onSubmit={submitHandler}> 
        <input type="text" onChange={(e)=>setTask(e.target.value)}></input>
        <button>Add task</button>
     </form>
    </>
  );
}

//Dispatching action 
// the useSelector hook allow you to extract data or the state from redux store useselector function (return the data) , while the useDispatch hook is used to dispatch actions to the store.