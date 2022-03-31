import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import './visualizar.css'

export default function Visualizar() {
  const[lineaState, setLineaState]=useState('8');
  const[subprocesoState, setSubprocesoState]=useState('laterales');
  const[reporteVisible,setReporteVisible]=useState(true);

  const src = "https://app.powerbi.com/view?r=eyJrIjoiZWRhOWExM2UtMjY1OS00YmVmLWJlMDQtYzc0OGNmMTkxNWEzIiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9"

  useEffect(() => {
      console.log(lineaState)
      console.log(subprocesoState)
      if(lineaState!='8' || subprocesoState!='laterales'){setReporteVisible(false);}  //De momento solo está la linea8 y lateral
      else{setReporteVisible(true);}
      document.getElementById('reporteMonitTR').src = src;
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
        <option value="cuadradillo">Cuadradillo</option>
        <option value="testeros">Testeros</option>
        <option selected value="laterales">Laterales</option>
        <option value="fondo">Fondo</option>
        <option value="envase">Envase</option>
        <option value="piloto">Piloto</option>
        <option value="total">Total</option>
      </select>
    </div>
    <iframe className={reporteVisible ? "reporteProd" : 'hidden'} id="reporteMonitTR" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>

</Fragment>
)

}
