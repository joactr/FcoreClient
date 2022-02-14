import React, {Fragment} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarConfig from './NavBarConfig';
import './configuracion.css'

const NivelesConfigProd = () => {

    const enviarDatos = (e) => {
      alert('Datos enviados correctamente')
    }

    return (
        <Fragment>
          <NavBarProd/>
          <NavBarConfig/>
          <SideNav/>
          <div className="wrapperConfigProd">
              <div className="config">
                  <label className="textoConfig">Nivel usuario acceso a Paneles monitorización TR:</label>
                  <select className="selectConfig">
                    <option selected disabled hidden></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Nivel usuario acceso a Parametros Producción:</label>
                  <select className="selectConfig">
                    <option selected disabled hidden></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Nivel usuario acceso a Reportar:</label>
                  <select className="selectConfig">
                    <option selected disabled hidden></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Nivel usuario acceso a Automatizar:</label>
                  <select className="selectConfig">
                    <option selected disabled hidden></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Nivel usuario acceso a Mis Flujos:</label>
                  <select className="selectConfig">
                    <option selected disabled hidden></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Nivel usuario acceso a Análisis:</label>
                  <select className="selectConfig">
                    <option selected disabled hidden></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </div>
              <div className="config">
                  <label className="textoConfig">Nivel usuario acceso a Configuración:</label>
                  <select className="selectConfig">
                    <option selected disabled hidden></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </div>
          </div>
        </Fragment>
    );
}

export default NivelesConfigProd;
