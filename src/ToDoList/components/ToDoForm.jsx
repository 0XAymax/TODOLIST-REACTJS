import {useState} from "react";
import axios from "axios";

export default  function ToDoForm(){
    const [value, setValue] = useState("");

    const handleInput =(e)=>{
        setValue(e.target.value);
        console.log(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { taskName: value }; // Changed from { value } to { taskName: value }
        try {
            await axios.post("http://localhost:8080/tasks", taskData);
            console.log(taskData);
        } catch(e) {
            console.log("Error occured :", e);
        }
        setValue("");
    }
    return (<>
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="What is the task today ?" onChange={handleInput}/>
            <button type="submit" className="todo-btn" >Add Task</button>
        </form>
    </>)
}