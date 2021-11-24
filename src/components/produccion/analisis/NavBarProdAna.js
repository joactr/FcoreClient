import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navBarProdAna.css'
const NavBarProdAna = () => {

  const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}
  const divCubre = {position:'fixed', top: 40, width:'100%', height:'5px', background:'white', zindex: 1}

return (
  <div class="wrapperNavProdAna">
    <NavLink to="/produccion/analisis/informes"  activeStyle={style} className="linkProd">InformesBI</NavLink>
    <NavLink to="/produccion/analisis/causa-raiz" activeStyle={style} className="linkProd">Análisis de causa raíz</NavLink>
    <NavLink to="/produccion/analisis/machine-learning" activeStyle={style} className="linkProd">ML</NavLink>
  </div>
)

}

export default NavBarProdAna;
