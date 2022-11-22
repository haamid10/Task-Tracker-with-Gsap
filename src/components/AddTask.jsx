import {useState} from "react"
const AddTask = () => {

  const [text, setText] = useState('')
  const  [day, setDay] = useState('')
  const  [reminder, setReminder] = useState(false)
  return (
    <form className='add-form'>
      <div className="form-control">
        <label htmlFor="">enter the task</label>
        <input type="text"  placeholder='enter the task' required value={text} onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="">enter the time</label>
        <input type="text"  placeholder='enter the date & time' required value={day} onChange={(e)=>setDay(e.target.value)}/>
      </div>
      <div className="form-control-check">
      <label >Set Reminder</label>
        <input type="checkbox"  value={reminder} onChange={(e)=>setReminder(e.currentTarget.value)} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  )
}

export default AddTask