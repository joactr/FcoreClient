import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navBarMant.css'
const NavBarProd = () => {

  const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}


return (
  <div className="wrapperNav">
  <NavLink to="/mantenimiento/parametros"  activeStyle={style} className="linkMant">Parámetros máquina</NavLink>
  <NavLink to="/mantenimiento/monitorizacion" activeStyle={style} className="linkMant">Monitorizacion TR</NavLink>
  <NavLink to="/mantenimiento/reportar" activeStyle={style} className="linkMant">Reportar</NavLink>
  <NavLink to="/mantenimiento/automatizar" activeStyle={style} className="linkMant">Automatizar</NavLink>
  </div>
)

}

export default NavBarProd;
