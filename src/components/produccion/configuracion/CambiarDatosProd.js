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
        <textarea className="commentCambiarDatosProd" defaultValue=" Número de perfiles (#)\n
                Hora Inicio Turno (dd/mm/aaa hh:mm)\n
                Hora Final turno (dd/mm/aaa hh:mm)\n
                Artículo (#)\n
                Orden de Fabr. (#)\n
                Tiempo de ciclo (s.)\n
                Ratio de Merma (%)\n
                Tiempo de Microparo (s.)\n
                Tiempo de avería (s.)\n
                Tiempo de Falta Material (s.)\n
                Tiempo de Paro 1 (s.)\n
                Pausa producción\n"
        rows="20">

        </textarea>

        <button className="botonCambiarDatosProd" onClick={mensajeAceptar}>Validar</button>
      </div>
    </Fragment>
  )
}

export default CambiarDatosProd;
