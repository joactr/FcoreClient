import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarMonitorizacionProd from './NavBarMonitorizacionProd'
import NavBarSubprocesosMonit from './NavBarSubprocesosMonit'
import './visualizar.css'

export default function Visualizar() {
  const[lineaState, setLineaState]=useState('Linea8');
  const[subprocesoState, setSubprocesoState]=useState('Lateral');
  const[reporteVisible,setReporteVisible]=useState(true);

  const src = "https://app.powerbi.com/view?r=eyJrIjoiMWEyNDQ3NDktMDcyNy00MTBlLThmMGMtZGQyOGE3YmQ2ZDFmIiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9&pageName=ReportSection"

  var links = {"Linea8":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
    ]}

  useEffect(() => {
      if(lineaState!='Linea8' || subprocesoState!='Lateral'){setReporteVisible(false);}  //De momento solo está la linea8 y lateral
      else{setReporteVisible(true);}
      document.getElementById('reporteMonitTR').src = src;
    },[lineaState, subprocesoState]);





return (
<Fragment>
    <NavBarProd/>
    <NavBarSubprocesosMonit stateChanger={setSubprocesoState}/>
    <SideNav/>
    <NavBarMonitorizacionProd stateChanger={setLineaState}/>
    <iframe className={reporteVisible ? "reporteProd" : 'hidden'} id="reporteMonitTR" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>

</Fragment>
)

}
