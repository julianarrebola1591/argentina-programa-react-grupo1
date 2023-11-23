import './Footer.css'
import { FaTrash } from "react-icons/fa6";

const Footer = ({ filter, setFilter, deleteDoneTasks, showAllTasks, showCompletedTasks, showPendingTasks }) => {

  return (
    <div className='Footer'>
      {/* Los filtros pegados a la izquierda. Usar .filters-selected para resaltar 
      de un color mas claro el que este seleccionado*/}
      <div className='filters'>
        {<span className={filter === "all" ? 'filters-selected' : ''} onClick={showAllTasks}>Todas</span>}
        {<span className={filter === "completed" ? 'filters-selected' : ''} onClick={showCompletedTasks}>Completadas</span>}
        {<span className={filter === "pending" ? 'filters-selected' : ''} onClick={showPendingTasks}>Pendientes</span>}
      </div>
      {/* Colocar este icono a la derecha del todo */}
      <div>
        <FaTrash id='filter-delete' onClick={deleteDoneTasks}/>
      </div>
    </div>
  )
}

export default Footer