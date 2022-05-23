import React from 'react';
import {NavLink} from "react-router-dom";
//import './Menu.css';

class Menu extends React.Component {

  render() {

  	return (
	

<nav className="navbar navbar-expand-lg fixed-top bg-dark">
	
		<NavLink to="/" className="navbar-brand">Funes</NavLink>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>


			<div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav mx-auto mb-5 mb-lg-0">
					<li className="nav-item">
						<NavLink to="/" className="nav-link">Home</NavLink>
					</li>

					<li className="nav-item">
						<NavLink to="/nosotros" className="nav-link">Quienes somos</NavLink>
					</li>

					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Nuestros productos</a>
							<div class="dropdown-menu bg-dark">
								<a class="dropdown-item bg-dark" href="#">Maquinas agricolas</a>
								<a class="dropdown-item bg-dark" href="#">Repuestos</a>
								<a class="dropdown-item bg-dark" href="#">Insumos</a>
							</div>
					</li>	
				
					<li className="nav-item">
						<NavLink to="/contacto" className="nav-link">Contacto</NavLink>
					</li>
				</ul>

				<ul className='navbar-nav'>
					<li className="nav-item">
						<NavLink to="/cuenta" className="nav-link">Inicar Sesion</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/cuenta" className="nav-link">Registrar</NavLink>
					</li>
				</ul>
		
				

	</div>

</nav>
					
  	)
    
  }

}

export default Menu;