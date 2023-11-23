import './TaskList.css'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({tasks, deleteTask}) => {
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
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList