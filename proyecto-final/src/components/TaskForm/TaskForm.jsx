import { useEffect, useState } from 'react'
import './TaskForm.css'

const TaskForm = ({addTask, tasks}) => {

  const handleAddTask = () => {
    const text = document.getElementById("frm-task-input").value
    if (text){
      addTask({
        id: tasks.length,
        taskName: text,
        taskDone: true
    })
    }
  }

  const addTaskEnter = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      handleAddTask()
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
      <button className='frm-button' onClick={handleAddTask}>Agregar</button>
    </div>
  )
}

export default TaskForm