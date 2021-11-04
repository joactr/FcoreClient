import React, {Fragment, useState} from 'react';
import SideNav from '../sideNav/SideNav';
import './configuracion.css'

const ConfiguracionProduccion = () => {

    const enviarDatos = (event) => {
      window.alert("Datos enviados");
    }

    function onChange() {
      alert('Permisos cambiados');
    }

    return (
        <Fragment>
          <SideNav/>
          <div className="wrapper">
              <label className="titulo">Perfil de usuario:</label>
              <div className="config">
                  <label className="textoConfig">Acceso a Parámetros producción</label>
                  <select className="selectConfig" onChange={onChange}>
                    <option selected disabled hidden></option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Paneles accesibles en Monitorización TR</label>
                  <select className="selectConfig" onChange={onChange}>
                    <option selected disabled hidden></option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Acceso a Reportar</label>
                  <select className="selectConfig" onChange={onChange}>
                    <option selected disabled hidden></option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Informes accesibles</label>
                  <select className="selectConfig" onChange={onChange}>
                    <option selected disabled hidden></option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Acceso a Límites de disparo</label>
                  <select className="selectConfig" onChange={onChange}>
                    <option selected disabled hidden></option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Acceso a Mis flujos</label>
                  <select className="selectConfig" onChange={onChange}>
                    <option selected disabled hidden></option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
              </div>
          </div>

        </Fragment>
    );
}

export default ConfiguracionProduccion;
