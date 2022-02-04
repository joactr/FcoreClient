import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navBarConfig.css'
const NavBarConfig = () => {

  const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

return (
  <div class="wrapperNavConfigProd">
  <NavLink to="/produccion/config/base"  activeStyle={style} className="linkConfigProd">Configuración</NavLink>
  <NavLink to="/produccion/config/datos-prod" activeStyle={style} className="linkConfigProd">Datos Produccion (Columnas BBDD)</NavLink>
  </div>
)

}

export default NavBarConfig;
