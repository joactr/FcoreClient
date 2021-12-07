import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../navBarProd.css'
const NavBarTurnos = () => {

const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

return (
  <div class="wrapperNavTurnos">
  <NavLink to="/produccion/turnos/1" activeStyle={style} className="linkProd">Línea 1</NavLink>
  <NavLink to="/produccion/turnos/2" activeStyle={style} className="linkProd">Línea 2</NavLink>
  <NavLink to="/produccion/turnos/3" activeStyle={style} className="linkProd">Línea 3</NavLink>

  </div>
)

}

export default NavBarTurnos;
