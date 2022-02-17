import React, {Fragment, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo.png'
import './sideNav.css'

export default function SideNav() {

  var activeStyle = {fontWeight:'bold'}

  return(
    <Fragment>
    <div className="sidenav">
      <NavLink to="/produccion/parametros-produccion" className="sideText" activeStyle={activeStyle}>Producción</NavLink>
      <NavLink to="/mantenimiento/parametros" className="sideText" activeStyle={activeStyle}>Mantenimiento</NavLink>
      <NavLink to="/calidad" className="sideText" activeStyle={activeStyle}>Calidad</NavLink>
      <NavLink to="/costes" className="sideText" activeStyle={activeStyle}>Costes</NavLink>
      <NavLink to="/configuracion" className="sideText" activeStyle={activeStyle}>Configuración</NavLink>
        <div>
          <a href="http://www.enira.es" target="_blank" rel="noreferrer">
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </div>
      </div>
    </Fragment>
  )

}
