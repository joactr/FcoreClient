import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import './visualizar.css'

export default function Tendencia() {
  const[lineaState, setLineaState]=useState('8');
  const[subprocesoState, setSubprocesoState]=useState('cuadradillo');
  const[reporteVisible,setReporteVisible]=useState(true);
  const[reportes,setReportes]=useState(null);
  const[linkActual,setLinkActual]=useState('');

  const src = {
    cuadradillo: "https://app.powerbi.com/view?r=eyJrIjoiNzQyNTNmMTctYzkwYi00Mjg4LWExOWMtZmM0ZTI2Mzg1MmM1IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    testeros: "https://app.powerbi.com/view?r=eyJrIjoiNzQyNTNmMTctYzkwYi00Mjg4LWExOWMtZmM0ZTI2Mzg1MmM1IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    laterales: "https://app.powerbi.com/view?r=eyJrIjoiNzQyNTNmMTctYzkwYi00Mjg4LWExOWMtZmM0ZTI2Mzg1MmM1IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    fondo: "https://app.powerbi.com/view?r=eyJrIjoiNzQyNTNmMTctYzkwYi00Mjg4LWExOWMtZmM0ZTI2Mzg1MmM1IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    envase: "https://app.powerbi.com/view?r=eyJrIjoiNzQyNTNmMTctYzkwYi00Mjg4LWExOWMtZmM0ZTI2Mzg1MmM1IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9",
    total: "https://app.powerbi.com/view?r=eyJrIjoiNzQyNTNmMTctYzkwYi00Mjg4LWExOWMtZmM0ZTI2Mzg1MmM1IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9"
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
        setReportes(JSON.parse(data));
      })
  },[]);

  useEffect(() => {
      //if(reportes !== null){
          if(lineaState!=='8'){setReporteVisible(false);}  //De momento solo está la linea8 y lateral
          else{
            if(reporteVisible){
              setLinkActual(src[subprocesoState]);
            }
            else{
              setReporteVisible(true);
              setLinkActual(src[subprocesoState]);
              //setTimeout(() =>document.getElementById('reporteMonitTR').src=src[subprocesoState],200)
            }
          }
      //}else{setReporteVisible(false);}
    },[lineaState, subprocesoState]);



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
        <option value="testeros">Testeros</option>
        <option value="laterales">Laterales</option>
        <option value="fondo">Fondo</option>
        <option value="envase">Envase</option>
        <option value="total">Total</option>
      </select>
    </div>
    <iframe className={reporteVisible ? "reporteProd" : 'hidden'} id="reporteMonitTR" title="reportePowerBI" src={linkActual} frameborder="0"></iframe>

</Fragment>
)

}
