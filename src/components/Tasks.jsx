

const Tasks = (props) => {
  return (
    <div className="task">
      {props.tasks.map((task)=><h2>{task.text}</h2>)}
    </div>
  )
}

export default Tasks