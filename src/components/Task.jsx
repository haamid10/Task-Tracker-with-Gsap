
const Task = ({task}) => {
  return (
    <div className="task">
      <h2>{task.text}</h2>
      <p>{task.day}</p>
      <h3>{task.reminder}</h3>
      
      </div>
  )
}

export default Task