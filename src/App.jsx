import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask"
const App = () => {
  const [tasks,setTasks]=useState( [ {
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
])
// delete 
const deleteBtn= (id) =>{
   setTasks(tasks.filter((task)=>task.id !== id))
  console.log(id)
}
// toggle Reminder
const toggleReminder =(id) =>{
  setTasks(tasks.map((task)=>task.id == id ?{...task,reminder:!task.reminder}: task ))
  console.log(id)
}
  return (
    <div className="container">
      <Header />
      <AddTask/>
      <Tasks  onToggle={toggleReminder} tasks={tasks} onDelete={deleteBtn}/>
      <h1  ></h1>
    </div>
  )
}

export default App