
import Task from "./Task"
const Tasks = ({tasks}) => {
  return (
    <div >
      {/* {tasks.map((task)=><h2>{task.id}</h2>)} */}
      {tasks.map((task)=>
      <Task key={task.id}  task={task}/>
      )}

      
    </div>
  )
}

export default Tasks