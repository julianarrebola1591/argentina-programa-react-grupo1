import { useState, useEffect } from 'react'
import './App.css'
import { TaskList, TaskForm, TaskItem, Footer } from './components'

function App() {

  const [tasks, setTasks] = useState([])
  const [currentTasks, setCurrentTasks] = useState([])

  const [filter, setFilter] = useState('all')

  const deleteTask = (taskId, isDone) => {
    !isDone && setTasks(tasks.filter(task => task.id != taskId))
  }

  const updateTaskDone = (taskId) => {
    const newTasks = [...tasks]
    const findTask = newTasks.find((task) => task.id === taskId)
    if (findTask) {
      findTask.taskDone = !findTask.taskDone
    }
    setTasks(newTasks)
  }

  const addTask =  (newTask) =>{
    setTasks([...tasks, newTask])
  }

  useEffect(()=>{
    console.log('detecte un cambio')
    setCurrentTasks(tasks)
  }, [tasks])

  const deleteDoneTasks = () => {
    const newTasks = [...tasks]
    setTasks(newTasks.filter((task) => task.taskDone === true))
  }

  const showAllTasks = () => {
    setFilter('all')
    setCurrentTasks(tasks)
  }

  const showCompletedTasks = () => {
    setFilter('completed')
    const newTasks = [...tasks]
    setCurrentTasks(newTasks.filter((task) => task.taskDone === false))
  }

  const showPendingTasks = () => {
    setFilter('pending')
    const newTasks = [...tasks]
    setCurrentTasks(newTasks.filter((task) => task.taskDone === true))
  }

  console.log(tasks)
  console.log(currentTasks)

  return (
    <section id='task-list'>
    <h1>LISTA DE TAREAS</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={currentTasks} deleteTask={deleteTask} updateTaskDone={updateTaskDone} />
      <Footer
      filter={filter} 
      setFilters={setFilter} 
      deleteDoneTasks={deleteDoneTasks}
      showAllTasks={showAllTasks} 
      showCompletedTasks={showCompletedTasks}
      showPendingTasks={showPendingTasks}
      />
    </section>
  )
}

export default App
