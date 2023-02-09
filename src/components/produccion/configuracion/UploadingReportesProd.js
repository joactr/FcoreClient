import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarConfig from './NavBarConfig';
import './configuracion.css'

const UploadingReportesProd = () => {

  const[lineaState, setLineaState]=useState('1');
  const[procesoState, setProcesoState]=useState('cuadradillo');
  const[linkReporte, setLinkReporte]=useState('');

    function onChange() {
      alert('Permisos cambiados');
    }

    const enviarDatos = (e) => {
      //Si el link no es vacío y empieza por la string seguimos
      if(linkReporte.startsWith('https://app.powerbi.com')){
        e.preventDefault();
        var data = {linea: lineaState, proceso: procesoState,link: linkReporte}
        data = JSON.stringify(data);
          fetch(global.backend+"/setReporteMonitTR" ,
          {
            headers: {
             'Content-type': 'application/json; charset=UTF-8',
             'Access-Control-Allow-Origin': '*',
             'token': localStorage.getItem('jwt_token')
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
        window.alert(`El link debe empezar por "https://app.powerbi.com/"`);
      }
    }

    return (
        <Fragment>
          <NavBarProd/>
          <NavBarConfig/>
          <SideNav/>
          <div className="contenedorConfigProd">
            <div className="wrapperconfigProdBorde">
              <div className="configUploadReportes">
                <label className="textoConfig">Línea donde se inserta el reporte Monitorización TR:</label>
                <select className="selectConfigLarge" onChange={(e => setLineaState(e.target.value))}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

              </div>
              <div className="configUploadReportes">
                <label className="textoConfig">Proceso donde se inserta el reporte Monitorización TR:</label>
                <select className="selectConfigLarge" onChange={(e => setProcesoState(e.target.value))}>
                  <option value="cuadradillo">Cuadradillo</option>
                  <option value="testeros">Testero</option>
                  <option value="lateral">Lateral</option>
                  <option value="fondo">Fondo</option>
                  <option value="envase">Envasado</option>
                  <option value="total">Total</option>
                </select>
              </div>
              <div className="configUploadReportes">
                  <label className="textoConfig">Copiar Link Reporte Ms Power BI Monitorizacón TR:</label>
                  <input type="text" className="inputConfig" onChange={(e => setLinkReporte(e.target.value))}/>
                  <button type="submit" className="botonUsuariosConfig" onClick={enviarDatos}>Enviar</button>
              </div>
            </div>
            <div className="wrapperconfigProdBorde">
              <div className="configUploadReportes">
                <label className="textoConfig">Línea donde se inserta el reporte Análisis :</label>
                <select className="selectConfigLarge" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

              </div>
              <div className="configUploadReportes">
                <label className="textoConfig">Proceso donde se inserta el reporte Análisis:</label>
                <select className="selectConfigLarge" >
                  <option value="Cuadradillo">Cuadradillo</option>
                  <option value="Testero">Testero</option>
                  <option value="Lateral">Lateral</option>
                  <option value="Fondo">Fondo</option>
                  <option value="Envasado">Envasado</option>
                </select>
              </div>
              <div className="configUploadReportes">
                <label className="textoConfig">Orden en el que se inserta el reporte Análisis:</label>
                <select className="selectConfigLarge" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="configUploadReportes">
                  <label className="textoConfig">Copiar Link Publicado Reporte Ms Power BI Análisis:</label>
                  <input type="text" className="inputConfig"/>
                  <button type="submit" className="botonUsuariosConfig" onClick={enviarDatos}>Enviar</button>
              </div>
            </div>
          </div>

        </Fragment>
    );
}

export default UploadingReportesProd;
