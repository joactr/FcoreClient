import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import './visualizar.css'

export default function Visualizar() {
  const[lineaState, setLineaState]=useState('8');
  const[subprocesoState, setSubprocesoState]=useState('cuadradillo');
  const[reporteVisible,setReporteVisible]=useState(true);
  const[reportes,setReportes]=useState(null);
  const[linkActual,setLinkActual]=useState('');

  const src = {
    cuadradillo: "https://app.powerbi.com/view?r=eyJrIjoiOTk4ODBmMmQtYmFjYy00MzIwLWEzNWMtZjQ4NzJmNTljZDlmIiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    testeros: "https://app.powerbi.com/view?r=eyJrIjoiYmQxYmVmYjEtYTE2OC00NGZiLTk3MTEtMjE1ZmE3MmVhYWNmIiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    lateral: "https://app.powerbi.com/view?r=eyJrIjoiODJiYjBhNTgtZDY0YS00NDk0LTg3ODctZGU1OWIxMTFhOWE0IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    fondo: "https://app.powerbi.com/view?r=eyJrIjoiYzlmZDI5NTMtZTNhZS00MmZhLWIwNzUtYmY3MjkyODY3MDFjIiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    envase: "https://app.powerbi.com/view?r=eyJrIjoiY2YzODY5MTktNjllOS00ZWUyLWE4ZWMtOTc5MmY1NjRjOGRmIiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9"
  }

  useEffect(() => {
    fetch(global.backend+"/getReporteMonitTR",
      {
        headers: {
         'token': localStorage.getItem('jwt_token'),
        },
        method: "GET",
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setReportes(data);
      })
  },[]);

  useEffect(() => {
      if(reportes !== null){
          if(reportes[lineaState][subprocesoState] === ''){setReporteVisible(false);}
          else{
            if(reporteVisible){
              setLinkActual(reportes[lineaState][subprocesoState]);
            }
            else{
              setReporteVisible(true);
              setLinkActual(reportes[lineaState][subprocesoState]);
            }
          }
      }else{setReporteVisible(false);}
    },[lineaState, subprocesoState,reportes]);



return (
<Fragment>
    <NavBarProd/>

    <SideNav/>

    <div className="wrapperLineaMonit">
      <label>Línea:</label>
      <select className="selectLineaMonit" onChange={(e)=>{setLineaState(e.target.value)}}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option selected value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label>Subproceso:</label>
      <select className="selectLineaMonit" onChange={(e)=>{setSubprocesoState(e.target.value)}}>
        <option selected value="cuadradillo">Cuadradillo</option>
        <option value="cuadradillo_prototipo">Cuadradillo Prototipo</option>
        <option value="testeros">Testeros</option>
        <option value="lateral">Laterales</option>
        <option value="fondo">Fondo</option>
        <option value="envase">Envase</option>
        <option value="total">Total</option>
      </select>
    </div>
    <iframe className={reporteVisible ? "reporteProd" : 'hidden'} id="reporteMonitTR" title="reportePowerBI" src={linkActual} frameborder="0"></iframe>

</Fragment>
)

}
