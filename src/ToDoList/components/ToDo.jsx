
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilSquare} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default  function ToDo({TASK,toggleComplete,deleteToDo,updateToDo}){
    return (<div className="Todo">
        <p onClick={() => toggleComplete(TASK.id)} className={`${TASK.completed ? 'completed' : ""} `}>{TASK.task}</p>
        <div>
            <FontAwesomeIcon className="edit-icon" icon={faPencilSquare} onClick={()=>updateToDo(TASK.id)} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>deleteToDo(TASK.id)} />
        </div>
    </div>)
}