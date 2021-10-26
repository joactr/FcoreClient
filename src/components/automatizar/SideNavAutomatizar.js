import React, {Fragment, useState} from 'react';
import logo from "../../logo.png";
import {Link} from 'react-router-dom';
import './sideNavAutomatizar.css';

export default function SideNavAutomatizar() {

  return (
  <Fragment>
  <div className="sidenavAutomatizar">
    <li className="sideText"><Link to="/produccion" className="link">Datos Producción</Link></li>
    <li className="sideText"><Link to="/visualizar" className="link">Visualizar</Link></li>
    <li className="sideText"><Link to="/reportar" className="link">Reportar</Link></li>
    <li className="sideText"><Link to="/automatizar" className="link">Automatizar</Link></li>
      <li className="subTextAutomatizar"><Link to="/flujos" className="link">Mis flujos</Link></li>
      <li className="subTextAutomatizar"><Link to="/limites" className="link">Límites de disparo</Link></li>
      <li className="subTextAutomatizar"><Link to="/editar-flujos" className="link">Editor de flujos</Link></li>
      <li className="subTextAutomatizar"><Link to="/config-automatizar" className="link">Configuración</Link></li>
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
