import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
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
  return (
    <div className="container">
      <Header />
      <Tasks  tasks={tasks}/>
      <h1  ></h1>
    </div>
  )
}

export default App