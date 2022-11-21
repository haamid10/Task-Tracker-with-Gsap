import {FaTimes} from "react-icons/fa"

const Task = ({task, onDelete}) => {
  
  return (
    <div className="task">
      <h2>{task.text} 
       <FaTimes onClick={()=>onDelete(task.id)}/></h2>
      
      <p>{task.day}</p>
      <h3>{task.reminder}</h3>
      
      </div>
  )
}

export default Task