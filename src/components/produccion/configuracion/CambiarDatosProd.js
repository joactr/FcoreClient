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
        <textarea className="commentCambiarDatosProd"
        rows="20" defaultValue=" Número de perfiles (#)&#13;
                        Hora Inicio Turno (dd/mm/aaa hh:mm)&#13;
                        Hora Final turno (dd/mm/aaa hh:mm)&#13;
                        Artículo (#)&#13;
                        Orden de Fabr. (#)&#13;
                        Tiempo de ciclo (s.)&#13;
                        Ratio de Merma (%)&#13;
                        Tiempo de Microparo (s.)&#13;
                        Tiempo de avería (s.)&#13;
                        Tiempo de Falta Material (s.)&#13;
                        Tiempo de Paro 1 (s.)&#13;
                        Pausa producción&#13;">

        </textarea>

        <button className="botonCambiarDatosProd" onClick={mensajeAceptar}>Validar</button>
      </div>
    </Fragment>
  )
}

export default CambiarDatosProd;
