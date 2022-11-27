import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState,useEffect } from "react"
import AddTask from "./components/AddTask"
const App = () => {
  const [tasks,setTasks]=useState([])
const [showAdd , setShowAdd]=useState(false)
const [showRes , setShoeRes]=useState(false)

useEffect(()=>{
  const getTasks = async ()=>{
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
 
},[])
const fetchTasks = async () => {
  const res= await fetch('http://localhost:5000/tasks/')
  const data= await res.json()
  console.log(data)
  return data
}


// add Task
const addTask = async (task)=>{
  const res= await fetch('http://localhost:5000/tasks/',{
    method:'POST',
    headers: {"content-type":"application/json"},
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks,data])
}
// delete 
const deleteBtn =async (id) =>{
  await  fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE',
  })
   setTasks(tasks.filter((task)=>task.id !== id))
  console.log(id)
}
// toggle Reminder
const FetchReminder = async (id) => {
  const res= await fetch(`http://localhost:5000/tasks/${id}`)
  const data= await res.json()
  console.log(data)
  return data
}
const toggleReminder = async (id) =>{
  const getToggle= await FetchReminder(id)
  const updateToggle={...getToggle,reminder:!getToggle.reminder}

 const res= await fetch(`http://localhost:5000/tasks/${id}`,{
  method: 'PUT',
  headers:{"content-type":"application/json"},
  body:JSON.stringify(updateToggle)
 })
const data = await res.json()
  
  setTasks(tasks.map((task)=>task.id == id ?{...task,reminder:data.reminder}: task ))
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
      <Header add={()=>setShowAdd(!showAdd)} app={()=>setShoeRes(!showRes)} show={showAdd} wash={showRes}/>
      
      {showAdd && <AddTask onAdd={addTask}/>}
      </main>
      <aside className="right">
      {showRes &&<Tasks  onToggle={toggleReminder} tasks={tasks} onDelete={deleteBtn} />}  
      
      </aside>
    
    </div>
  )
}

export default App