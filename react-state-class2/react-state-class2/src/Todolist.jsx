import { useState } from "react"
export default function Todolist() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos,newTodo]);
        setNewTodo("");
    };

    let UpdateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    return (<div>

        <input placeholder="Add a task " 
        value={newTodo} 
        onChange={UpdateTodoValue}>
        </input>
        <button onClick={addNewTask}>Add</button>
        <br></br>
        <br></br>
        <br></br>

        <hr></hr>
        <h4>task todo</h4>
        <ul>
            {
                todos.map((todo) => (
                    <li>{todo}</li>
                ))
            }

        </ul>


    </div>
    );


}