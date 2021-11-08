import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png'
import './sideNav.css'

export default function SideNav() {
  var base = false;
  var oneNest = false;
  var twoNests = false;

  useEffect(()=>{
    try {
      var elemento = document.getElementById(window.location.pathname);
      if (elemento!=null){
        console.log(elemento.id)
        if(oneNest){elemento.classList.toggle('subTextActive');}
        else if(twoNests){elemento.classList.toggle('subSubTextActive')}

      }
    }catch(e){ console.log("error en sidenav")}
  }, [])

  function Base(){
    var listaLinks = ["/home"];
    if(listaLinks.includes(window.location.pathname)){
      base = true;
      return (
        <Fragment>
          <li class="sideText" id=""><Link to="/produccion/parametros-produccion" className="link">Producción</Link></li>
          <li class="sideText" id=""><Link to="/mantenimiento/parametros" className="link">Mantenimiento</Link></li>
          <li class="sideText" id=""><Link to="/home" className="link">Calidad</Link></li>
          <li class="sideText" id=""><Link to="/home" className="link">Costes</Link></li>
          <li class="sideText" id=""><Link to="/home" className="link">Configuración</Link></li>
        </Fragment>
      )
    }
  }

  function Produccion(){
    var listaProd = ["/produccion/parametros-produccion",
      "/produccion/parametros-produccion",
      "/produccion/visualizar",
      "/produccion/reportar",
      "/produccion/config",
      "/produccion/informes"
    ]
    if(listaProd.includes(window.location.pathname)){
      oneNest = true;
      return (
        <Fragment>
        <li class="sideTextActive" id="/produccion/"><Link to="/produccion/parametros-produccion" className="link">Producción</Link></li>
            <li class="subText" id="/produccion/parametros-produccion"><Link to="/produccion/parametros-produccion" className="link">Datos Producción</Link></li>
            <li class="subText" id="/produccion/visualizar"><Link to="/produccion/visualizar" className="link">Monitorizacion TR</Link></li>
            <li class="subText" id="/produccion/reportar"><Link to="/produccion/reportar" className="link">Reportar</Link></li>
            <li class="subText" id="/produccion/informes"><Link to="/produccion/informes" className="link">Informes</Link></li>
            <li class="subText" id="/produccion/automatizar/limites"><Link to="/produccion/automatizar/limites" className="link">Automatizar</Link></li>
            <li class="subText" id="/produccion/config"><Link to="/produccion/config" className="link">Configuración</Link></li>
        <li class="sideText" id=""><Link to="/mantenimiento/parametros" className="link">Mantenimiento</Link></li>
        <li class="sideText" id=""><Link to="/home" className="link">Calidad</Link></li>
        <li class="sideText" id=""><Link to="/home" className="link">Costes</Link></li>
        <li class="sideText" id=""><Link to="/home" className="link">Configuración</Link></li>
        </Fragment>
      )
    }
  }

  function Mantenimiento(){
    var listaProd = ["/mantenimiento/parametros"
    ]
    if(listaProd.includes(window.location.pathname)){
      oneNest = true;
      return (
        <Fragment>
        <li class="sideText" id=""><Link to="/produccion/parametros-produccion" className="link">Producción</Link></li>
        <li class="sideTextActive" id=""><Link to="/mantenimiento/parametros" className="link">Mantenimiento</Link></li>
          <li class="subText" id="/mantenimiento/parametros"><Link to="/mantenimiento/parametros" className="link">Parámetros máquina</Link></li>

        <li class="sideText" id=""><Link to="/home" className="link">Calidad</Link></li>
        <li class="sideText" id=""><Link to="/home" className="link">Costes</Link></li>
        <li class="sideText" id=""><Link to="/home" className="link">Configuración</Link></li>
        </Fragment>
      )
    }
  }

  function Automatizar(){
    var listaAut = ["/produccion/automatizar/limites",
        "/produccion/automatizar/flujos"]
    if(listaAut.includes(window.location.pathname)){
      twoNests = true;
      return (
        <Fragment>
        <li class="sideTextActive"><Link to="/produccion/parametros-produccion" className="link">Producción</Link></li>
          <li class="subText" id="/produccion"><Link to="/produccion/parametros-produccion" className="link">Datos Producción</Link></li>
          <li class="subText" id="/visualizar"><Link to="/produccion/visualizar" className="link">Monitorizacion TR</Link></li>
          <li class="subText" id="/reportar"><Link to="/produccion/reportar" className="link">Reportar</Link></li>
          <li class="subText" id="/produccion/informes"><Link to="/produccion/informes" className="link">Informes</Link></li>
          <li class="subTextActive"><Link to="/produccion/automatizar/limites" className="link">Automatizar</Link></li>
            <li class="subSubText" id="/produccion/automatizar/limites"><Link to="/produccion/automatizar/limites" className="link">Límites de disparo</Link></li>
            <li class="subSubText" id="/produccion/automatizar/flujos"><Link to="/produccion/automatizar/flujos" className="link">Mis flujos</Link></li>
          <li class="subText" id="/config"><Link to="/produccion/config" className="link">Configuración</Link></li>

        <li class="sideText" id=""><Link to="/home" className="link">Mantenimiento</Link></li>
        <li class="sideText" id=""><Link to="/home" className="link">Calidad</Link></li>
        <li class="sideText" id=""><Link to="/home" className="link">Costes</Link></li>
        <li class="sideText" id=""><Link to="/home" className="link">Configuración</Link></li>
        </Fragment>
      )
    }
  }

  return(
    <Fragment>
    <div className="sidenav">
        {Base()}
        {Produccion()}
        {Automatizar()}
        {Mantenimiento()}
        <div>
          <a href="http://www.enira.es" target="_blank" rel="noreferrer">
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </div>
      </div>
    </Fragment>
  )

}
