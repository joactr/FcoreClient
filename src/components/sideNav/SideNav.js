import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png'
import './sideNav.css'

export default function SideNav() {
  useEffect(()=>{
    var elemento = document.getElementById(window.location.pathname);
    if (elemento!=null){
      try {
        elemento.classList.toggle('sideTextActive');
      }catch(e){ console.log("error en sidenav")}
      console.log(elemento)
    }
  }, [])
/*      <li class="sideText" id="/produccion"><Link to="/produccion/parametros-produccion" className="link">Datos Producción</Link></li>
      <li class="sideText" id="/visualizar"><Link to="/visualizar" className="link">Visualizar</Link></li>
      <li class="sideText" id="/reportar"><Link to="/reportar" className="link">Reportar</Link></li>
      <li class="sideText" id="/automatizar"><Link to="/produccion/automatizar/limites" className="link">Automatizar</Link></li>
      <li class="sideText" id="/config"><Link to="/config" className="link">Configuración</Link></li>*/
  return(
    <Fragment>
    <div className="sidenav">
      <li class="sideText" id="/produccion"><Link to="/produccion/parametros-produccion" className="link">Producción</Link></li>
      <li class="sideText" id=""><Link to="/home" className="link">Mantenimiento</Link></li>
      <li class="sideText" id=""><Link to="/home" className="link">Calidad</Link></li>
      <li class="sideText" id=""><Link to="/home" className="link">Costes</Link></li>
      <li class="sideText" id=""><Link to="/home" className="link">Configuración</Link></li>

        <div>
          <a href="http://www.enira.es" target="_blank" rel="noreferrer">
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </div>
      </div>
    </Fragment>
  )

}
