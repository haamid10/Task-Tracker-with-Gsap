
import {FaTimes} from "react-icons/fa"
const Task = ({task}) => {
  return (
    <div className="task">
      <h2>{task.text} 
       <FaTimes/></h2>
      
      <p>{task.day}</p>
      <h3>{task.reminder}</h3>
      
      </div>
  )
}

export default Task