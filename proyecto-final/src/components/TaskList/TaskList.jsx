import './TaskList.css'

const TaskList = ({children}) => {
  return (
    <div>
      <h1>LISTA DE TAREAS</h1>
      {children}
    </div>
  )
}

export default TaskList