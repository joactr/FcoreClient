import React, {Fragment} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarConfig from './NavBarConfig';
import './configuracion.css'

const CambiarDatosProd = () => {
  function mensajeAceptar(){
    window.alert("Columnas de BBDD editadas correctamente");
  }


  return (
    <Fragment>
      <NavBarProd/>
      <NavBarConfig/>
      <SideNav/>
      <div className="cambiarDatosProdWrapper">
        <textarea className="commentCambiarDatosProd"  textmode="MultiLine" defaultValue=" Número de perfiles (#)
                Hora Inicio Turno (dd/mm/aaa hh:mm)
                Hora Final turno (dd/mm/aaa hh:mm)
                Artículo (#)
                Orden de Fabr. (#)
                Tiempo de ciclo (s.)
                Ratio de Merma (%)
                Tiempo de Microparo (s.)
                Tiempo de avería (s.)
                Tiempo de Falta Material (s.)
                Tiempo de Paro 1 (s.)
                Pausa producción"
        rows="20">

        </textarea>

        <button className="botonCambiarDatosProd" onClick={mensajeAceptar}>Validar</button>
      </div>
    </Fragment>
  )
}

export default CambiarDatosProd;
