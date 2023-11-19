import './App.css'

function App() {

  const TaskItem = () => {
    return (
      <h2>Tarea</h2>
    )
  }

  const TaskList = () => {
    return (
      <div>
        <h1>Lista de Tareas</h1>
        <input type="text" />
        <button></button>
        <TaskItem />
      </div>
    )
  }

  return (
    <>
      <TaskList />
    </>
  )
}

export default App
