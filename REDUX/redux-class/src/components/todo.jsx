import { useSelector } from "react-redux";
import Addform from "./Addform";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoslice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickhandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    };

    const markAsDoneHandler = (id) => {
        console.log("mark as done", id);
        dispatch(markAsDone(id));
    };

    return (
        <>
            <Addform />
            <h2>Todo list App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                        {todo.task}
                        <button onClick={() => clickhandler(todo.id)}>Delete</button>
                        <button onClick={() => markAsDoneHandler(todo.id)}>Mark as done</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
