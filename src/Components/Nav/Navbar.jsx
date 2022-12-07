import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const opciones = ['Inicio', 'Ofertas','Quienes Somos']
  const [active, setActive] = useState(window.location.pathname)

  function activeLink(opcion) {
    const rutaActual = `/${opcion.toLocaleLowerCase()}`
    return active === rutaActual
      ? 'fw-bold'
      : null
  }
  function hadleClick(opcion) {
    const rutaActual = `/${opcion.toLocaleLowerCase()}`
    setActive(rutaActual)
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-warning bg-warning w-100 border-primary" >
      <div className="container-fluid">
        <Link className="navbar-brand text-black" to='/'>Mi sitio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            
            {opciones.map(opcion =>
              <Link
                key={opcion}
                className={`nav-link text-black ${activeLink(opcion)}`}
                to={opcion.toLocaleLowerCase()}
                onClick={() => hadleClick(opcion)}>{opcion}</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
    
  )
}
