import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navBarProdDatos.css'
const NavBarProdDatos = () => {

  const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

return (
  <div class="wrapperNavProdDatos">
    <NavLink to="/produccion/datos/pausas"  activeStyle={style} className="linkProdBig">Programación pausas</NavLink>
    <NavLink to="/produccion/datos/erp" activeStyle={style} className="linkProdBig">Planificación ERP</NavLink>
  </div>
)}

export default NavBarProdDatos;
