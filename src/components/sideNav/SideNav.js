import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png'
import './sideNav.css'

export default function SideNav() {


  return(
    <Fragment>
    <div className="sidenav">
      <li className="sideText"><Link to="/produccion" className="link">Datos Producción</Link></li>
      <li className="sideText"><Link to="/visualizar" className="link">Visualizar</Link></li>
      <li className="sideText"><Link to="/reportar" className="link">Reportar</Link></li>
      <li className="sideText"><Link to="/automatizar" className="link">Automatizar</Link></li>
      <li className="sideText"><Link to="/config" className="link">Configuración</Link></li>
        <div>
          <a href="http://www.enira.es" target="_blank" rel="noreferrer">
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </div>
      </div>
    </Fragment>
  )

}
