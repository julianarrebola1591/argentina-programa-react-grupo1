/* eslint-disable react/jsx-key */
import { useState } from 'react'
import './App.css'
import { TaskList, TaskForm, TaskItem } from './components'

function App() {

  const [tasks, setTasks] = useState([])
  console.log(tasks)

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  return (
    <section id='task-list'>
    <h1>LISTA DE TAREAS</h1>
      <TaskForm 
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </section>
  )
}

export default App
