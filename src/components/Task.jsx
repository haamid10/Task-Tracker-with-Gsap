import {FaTimes} from "react-icons/fa"
const Task = ({task, onDelete,onToggle}) => {
  
  return (
    <div className={`task ${task.reminder ? 'reminder': ""}`} onDoubleClick={()=>onToggle(task.id)}>
      
      <h2>{task.text} 
       <FaTimes onClick={()=>onDelete(task.id)}/></h2>
      
      <p>{task.day}</p>
      <h3>{task.reminder}</h3>
   
      </div>
  )
}

export default Task