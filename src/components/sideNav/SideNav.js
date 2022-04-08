import React, {Fragment, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo.png'
import './sideNav.css'
import { useLocation, useHistory } from 'react-router-dom'

export default function SideNav() {
  var activeStyle = {fontWeight: 'bold'}
  var username = localStorage.getItem('user');
  const history = useHistory();

  function logOut() {
    localStorage.removeItem('user')
    localStorage.removeItem('jwt_token')
    localStorage.removeItem('isLoggedIn')
    history.push("/login");
  }

  return(
    <Fragment>

    <div className="sidenav">
        <div className="wrapperLogout">
          <b className="nombreUsuarioSidenav">{"Usuario: " + username}</b>
          <button className="botonLogout" onClick={logOut}>Log-out</button>
        </div>
        <div className="wrapperLinksSideNav">
          <NavLink to="/produccion/" className="sideText" activeStyle={activeStyle}>Producción</NavLink>
          <NavLink to="/mantenimiento/" className="sideText" activeStyle={activeStyle}>Mantenimiento</NavLink>
          <NavLink to="/calidad" className="sideText" activeStyle={activeStyle}>Calidad</NavLink>
          <NavLink to="/costes" className="sideText" activeStyle={activeStyle}>Costes</NavLink>
          <NavLink to="/configuracion" className="sideText" activeStyle={activeStyle}>Configuración</NavLink>
        </div>
        <div>
          <a href="http://www.enira.es" target="_blank" rel="noreferrer">
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </div>
      </div>


    </Fragment>
  )

}
