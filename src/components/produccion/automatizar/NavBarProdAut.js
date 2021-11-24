import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navBarProdAut.css'
const NavBarProdAut = () => {

  const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

return (
  <div class="wrapperNavProdAut">
  <NavLink to="/produccion/automatizar/limites"  activeStyle={style} className="linkProd">Límites disparo</NavLink>
  <NavLink to="/produccion/automatizar/flujos" activeStyle={style} className="linkProd">Mis flujos</NavLink>

  </div>
)

}

export default NavBarProdAut;
