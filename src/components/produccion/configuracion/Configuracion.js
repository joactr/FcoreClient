import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarConfig from './NavBarConfig';
import './configuracion.css'

const ConfiguracionProduccion = () => {

    const enviarDatos = (event) => {
      window.alert("Datos enviados");
    }

    function onChange() {
      alert('Permisos cambiados');
    }

    const onEnterPress = (e) => {
      if(e.keyCode === 13 && e.shiftKey === false) {
        //Si el link no es vacío y empieza por la string seguimos
        if(e.target.value.trim() !== '' && e.target.value.trim().startsWith('https://app.powerbi.com')){
          e.preventDefault();
          var data = {link: e.target.value}
          data = JSON.stringify(data);
          //https://factorybibackend.herokuapp.com/setReporteBI
          //http://localhost:8080/setReporteBI
            fetch("https://factorybibackend.herokuapp.com/setReporteBI" ,
            {
              headers: {
               'Content-type': 'application/json; charset=UTF-8',
               'Access-Control-Allow-Origin': '*'
             },
                 method: "POST",
                 body: data

            }).then((response)=> {
              if(response.ok){
                  window.alert(`Link de PowerBI actualizado`);
              }else {
                  window.alert('Error al publicar link, contacte al administrador');
              }
            }).catch((error) => {window.alert("Error de conexión");})
          e.target.value ='';
        }else{
          window.alert(`Para que el link sea válido debe empezar por "https://app.powerbi.com"`);
        }
      }
    }

    return (
        <Fragment>
          <NavBarProd/>
          <NavBarConfig/>
          <SideNav/>
          <div className="wrapper">
              <label className="tituloConfig">Perfil de usuario:</label>
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
              <div className="config">
                  <label className="textoConfig">Link informe PowerBI</label>
                  <input type="text" className="inputConfig" onKeyDown={onEnterPress}/>

              </div>
          </div>

        </Fragment>
    );
}

export default ConfiguracionProduccion;
