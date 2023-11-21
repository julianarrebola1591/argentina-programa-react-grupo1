import { useEffect, useState } from 'react'
import './TaskForm.css'

const TaskForm = ({tasks, setTasks}) => {

  const addTask = () => {
    const text = document.getElementById("frm-task-input").value
    tasks.push(
      {
        id: tasks.length,
        taskName: text,
        taskDone: true
      }
    )
    console.log(tasks)
    const newTask = [... tasks]
    setTasks(newTask)
  }

  const addTaskEnter = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      addTask()
    }
  }

  const resetFrom = useEffect(() => {
    document.getElementById("frm-task-input").value = ''
  }); [addTask, addTaskEnter]

  return (
    <div className='frm-container'>
      <input 
        id='frm-task-input' 
        type="text" 
        placeholder='Ingrese una tarea' 
        onKeyDown={e => addTaskEnter(e)}
      />
      <button className='frm-button' onClick={addTask}>Agregar</button>
    </div>
  )
}

export default TaskForm