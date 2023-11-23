import { useState } from 'react'
import './TaskItem.css'
import { FaDeleteLeft } from "react-icons/fa6";

const TaskItem = ({id, name, taskDone, deleteTask, updateTaskDone}) => {

  return (
    <div className='task-container'>
      {taskDone ? <input onClick={() => updateTaskDone(id)} type="checkbox" /> : <input onClick={() => updateTaskDone(id)} type="checkbox" defaultChecked />}
      {<span className={taskDone ? '' : 'done-task-text'}>{name}</span>}
      {<FaDeleteLeft className='delete-icon' onClick={() => deleteTask(id)}/>}
    </div>
  )
}

export default TaskItem