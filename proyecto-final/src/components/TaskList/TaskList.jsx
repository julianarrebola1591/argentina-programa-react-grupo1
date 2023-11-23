import './TaskList.css'
import TaskItem from '../TaskItem/TaskItem'
import { useState } from 'react'

const TaskList = ({tasks, deleteTask, updateTaskDone}) => {

  return (
    <div>
      <div className='tasks-container'>
        {tasks.map(task =>(
          <TaskItem 
            id={task.id}
            key={task.id}
            name={task.taskName}
            isDone={task.taskDone}
            deleteTask={deleteTask}
            updateTaskDone={updateTaskDone}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList