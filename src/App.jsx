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
const [showAdd , setShowAdd]=useState(false)
const [showRes , setShoeRes]=useState(false)

// add Task
const addTask =(task)=>{
  const id= Math.floor(Math.random()*1000)+1
  const newTask= {id,...task}
  setTasks([...tasks,newTask])
}
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
      <aside className="left"> 
      <h1>
        Task Tracker 
      </h1>
      
      </aside>
      <main className="main">
      <Header add={()=>setShowAdd(!showAdd)} app={()=>setShoeRes(!showRes)}/>
      
      {showAdd && <AddTask onAdd={addTask}/>}
      </main>
      <aside className="right">
      {showRes &&<Tasks  onToggle={toggleReminder} tasks={tasks} onDelete={deleteBtn} />}  
      
      </aside>
    
    </div>
  )
}

export default App