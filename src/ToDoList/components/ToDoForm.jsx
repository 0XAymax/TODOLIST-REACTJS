import {useState} from "react";

export default  function ToDoForm({addTodo}){
    const [value, setValue] = useState("");

    const handleInput =(e)=>{
        setValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return (<>
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="What is the task today ?" onChange={handleInput}/>
            <button type="submit" className="todo-btn" >Add Task</button>
        </form>
    </>)
}