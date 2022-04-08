import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navBarConfig.css'
const NavBarConfig = () => {

  const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

return (
  <div className="wrapperNavConfigProd">
    <NavLink to="/produccion/config/usuarios"  activeStyle={style} className="linkConfigProd">Usuarios</NavLink>
    <NavLink to="/produccion/config/datos-prod" activeStyle={style} className="linkConfigProd">Datos Produccion (Columnas BBDD)</NavLink>
    <NavLink to="/produccion/config/niveles" activeStyle={style} className="linkConfigProd">Niveles</NavLink>
    <NavLink to="/produccion/config/uploading-reportes" activeStyle={style} className="linkConfigProd">Uploading Reportes</NavLink>

  </div>
)

}

export default NavBarConfig;
