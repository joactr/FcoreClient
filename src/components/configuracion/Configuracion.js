import React, {Fragment, useState} from 'react';
import SideNav from "../sideNav/SideNav";

const Configuracion = () => {

    const enviarDatos = (event) => {
      window.alert("Datos enviados");
    }

    function sayHello() {
      alert('Configuración modificada');
    }

    return (
        <Fragment>
          <SideNav/>
          <div className="config">
              <label className="textoConfig">Añadir nuevo usuario</label>
              <input type="text" className="inputConfig"/>
              <button type="button" onClick={sayHello} className="botonProd">Introducir</button>
          </div>
          <div className="config">
              <label className="textoConfig">Perfil nuevo usuario</label>
              <select className="selectConfig" >
                <option value="operario">Operario</option>
                <option value="administrador">Administrador</option>
              </select>
              <button type="button" onClick={sayHello} className="botonProd">Introducir</button>
          </div>
          <div className="config">
              <label className="textoConfig">Añadir nuevo tipo de incidencia</label>
              <input type="text" className="inputConfig"/>
              <button type="button" onClick={sayHello} className="botonProd">Introducir</button>
          </div>
        </Fragment>
    );
}

export default Configuracion;
