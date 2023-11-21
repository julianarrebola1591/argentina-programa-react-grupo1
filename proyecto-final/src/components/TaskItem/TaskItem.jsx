import { useState } from 'react'
import './TaskItem.css'
import { FaDeleteLeft } from "react-icons/fa6";

const TaskItem = ({id, name, isDone, deleteTask}) => {

  const [taskDone, setTaskDone] = useState(isDone)

  const ckeckTask = () => {
    setTaskDone(!taskDone)
  }

  return (
    <div className='task-container'>
      {taskDone ? <input onClick={ckeckTask} type="checkbox" /> : <input onClick={ckeckTask} type="checkbox" defaultChecked />}
      {<span className={taskDone ? '' : 'done-task-text'}>{name}</span>}
      {<FaDeleteLeft className='delete-icon' onClick={() => deleteTask(id)}/>}
    </div>
  )
}

export default TaskItem