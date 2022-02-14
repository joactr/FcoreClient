import React, {Fragment} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarConfig from './NavBarConfig';
import './configuracion.css'

const UploadingReportesProd = () => {

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
          <div className="wrapperConfigProd">
            <div className="config">
              <label className="textoConfig">Línea donde se inserta el reporte Monitorización TR:</label>
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
            <div className="config">
              <label className="textoConfig">Proceso donde se inserta el reporte Monitorización TR:</label>
              <select className="selectConfigLarge" >
                <option value="Cuadradillo">Cuadradillo</option>
                <option value="Testero">Testero</option>
                <option value="Lateral">Lateral</option>
                <option value="Fondo">Fondo</option>
                <option value="Envasado">Envasado</option>
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

export default UploadingReportesProd;
