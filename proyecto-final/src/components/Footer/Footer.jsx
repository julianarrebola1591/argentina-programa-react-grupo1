

const Footer = ({filter, setFilter}) => {


  return (
    <div className='footer'>
        {/* footer filters debe estar pegado a la parte izquiera. cuando el estado de filter cambia se agrega 
        la clase selected que tiene que hacer que se resalte con un color mas visible*/}
        <div className='footer-filters'> 
          {<span className={filter === 'all' ? 'filter-selected' : ''} >Todas</span>}
          {<span className={filter === 'completed' ? 'filter-selected' : ''} >Completadas</span>}
          {<span className={filter === 'pending' ? 'filter-selected' : ''} >Pendientes</span>}
        </div>
        {/* el delete pegado a la derecha */}
        <div className='footer-delete'>
          <span>Eliminar</span>
        </div>
      </div>
  )
}

export default Footer