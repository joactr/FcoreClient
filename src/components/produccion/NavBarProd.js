import React, {Fragment, useStatem, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navBarProd.css'
const NavBarProd = () => {

  const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

  const rolLimitado = ["Datos Producción", "Monitorizacion TR"]
  const links = [{
      link:"/produccion/datos/pausas",
      texto: "Datos Producción"
    },{
      link:"/produccion/visualizar",
      texto: "Monitorizacion TR"
    },{
      link:"/produccion/reportar",
      texto: "Reportar"
    },{
      link:"/produccion/analisis",
      texto: "Análisis"
    },{
      link:"/produccion/automatizar",
      texto: "Automatizar"
    },{
      link:"/produccion/config",
      texto: "Configuración"
    }]

  function items(){
    let listItems;
    if(localStorage.getItem("nivel")<5){
      listItems = links.map((element) => //Entrega los links adecuados al rol
        rolLimitado.includes(element.texto)? <NavLink to={element.link}  activeStyle={style} className="linkProd">{element.texto}</NavLink> : null
      );
    }else{
      listItems = links.map((element) => //Entrega los links adecuados al rol
        <NavLink to={element.link}  activeStyle={style} className="linkProd">{element.texto}</NavLink>
      );
    }
    return (listItems)
  }

return (
  <div className="wrapperNavProd">
    {items()}
  </div>
)
}

export default NavBarProd;
