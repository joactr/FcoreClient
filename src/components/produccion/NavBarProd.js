import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navBarProd.css'
const NavBarProd = () => {

  const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

  useEffect(()=>{
    try {
      var elemento = document.getElementById(window.location.pathname);
      if (elemento!=null){
        console.log(elemento)

      }
    }catch(e){ console.log("error en sidenav")
  console.log(e)}
  }, [])

return (
  <div class="wrapperNavProd">
  <NavLink to="/produccion/parametros-produccion"  activeStyle={style} className="linkProd">Datos Producción</NavLink>
  <NavLink to="/produccion/visualizar" activeStyle={style} className="linkProd">Monitorizacion TR</NavLink>
  <NavLink to="/produccion/reportar" activeStyle={style} className="linkProd">Reportar</NavLink>
  <NavLink to="/produccion/analisis/informes" activeStyle={style} className="linkProd">Análisis</NavLink>
  <NavLink to="/produccion/automatizar" activeStyle={style} className="linkProd">Automatizar</NavLink>
  <NavLink to="/produccion/config" activeStyle={style} className="linkProd">Configuración</NavLink>
  </div>
)

}

export default NavBarProd;
