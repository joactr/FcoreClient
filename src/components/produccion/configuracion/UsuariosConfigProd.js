import React, {Fragment} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarConfig from './NavBarConfig';
import './configuracion.css'

const UsuariosConfigProd = () => {

    const enviarDatos = (e) => {
      alert('Datos enviados correctamente')
    }

    return (
        <Fragment>
          <NavBarProd/>
          <NavBarConfig/>
          <SideNav/>
          <div className="wrapperConfigProd">
              <div className="filaConfigProd">
                  <label className="textoConfig">Nombre:</label>
                  <input type="text" className="inputConfig"/>
                  <button type="submit" className="botonUsuariosConfig" onClick={enviarDatos}>Enviar</button>
              </div>
              <div className="config">
                  <label className="textoConfig">Código:</label>
                  <input type="text" className="inputConfig"/>
              </div>
              <div className="config">
                  <label className="textoConfig">Nivel de usuario asignado:</label>
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

export default UsuariosConfigProd;
