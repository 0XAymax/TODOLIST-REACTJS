import {useState} from "react";

export default  function EditToDoForm({updateToDo,TASK}){
    const [value, setValue] = useState(TASK.task);

    const handleInput =(e)=>{
        setValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        updateToDo(value,TASK.id);
        setValue("");
    }
    return (<>
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Update Task" onChange={handleInput}/>
            <button type="submit" className="todo-btn" >Update Task</button>
        </form>
    </>)
}