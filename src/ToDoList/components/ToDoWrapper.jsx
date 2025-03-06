import ToDoForm from "./ToDoForm";
import {useState} from "react";
import {v4 as uuidv4 } from 'uuid';
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";

uuidv4();
export default  function ToDoWrapper(){
    const [todos,setTodos]=useState([]);

    const addTodo =(todo) =>{
        setTodos([...todos,{id:uuidv4(),task : todo,completed :false, isEditting :false}])
        console.log(todos)
    }

    const toggleComplete=(id) =>{
         setTodos(todos.map(todo => todo.id == id ? {...todo,completed : !todo.completed} : todo))
    }

    const deleteToDo=(id)=>{
        setTodos(todos.filter(todo => todo.id!=id ))
    }

    const updateToDo=(id)=>{
        setTodos(todos.map(todo => todo.id == id ? {...todo,isEditting :!todo.isEditting} : todo))
    }
    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditting: !todo.isEditting } : todo
            )
        );
    };

    return (<div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <ToDoForm addTodo={addTodo}/>
        {todos.map((todo,key) => (
            todo.isEditting ? (<EditToDoForm TASK={todo} updateToDo={editTask}/>) :(
              <ToDo TASK={todo} key={key} toggleComplete={toggleComplete} deleteToDo={deleteToDo} updateToDo={updateToDo}/>)
        ))}
      </div>
    )
}