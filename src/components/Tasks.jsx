const tasks= [

  {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:28pm",
       reminder: true
  },
  {
      id: 2,
      text: "Meeting at the School",
      day: "Feb 6th at 3:28pm",
       reminder: true
  },
  {
      id: 3,
      text: "Food shopping",
      day: "Feb 7th at 9:28pm",
      reminder: false
  }

]

const Tasks = () => {
  return (
    <div className="task">
      {tasks.map((task)=><h2>{task.text}</h2>)}
    </div>
  )
}

export default Tasks