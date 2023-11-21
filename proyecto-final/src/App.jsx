/* eslint-disable react/jsx-key */
import { useState } from 'react'
import './App.css'
import { TaskList, TaskForm, TaskItem } from './components'

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <section id='task-list'>
      <TaskList>
      <TaskForm 
        tasks={tasks}
        setTasks={setTasks}
      />
      <div className='tasks-container'>
        {tasks.map(task =>(
          <TaskItem 
            id={task.id}
            key={task.id}
            name={task.taskName}
            isDone={task.taskDone}
          />
        ))}
      </div>
      </TaskList>
    </section>
  )
}

export default App
