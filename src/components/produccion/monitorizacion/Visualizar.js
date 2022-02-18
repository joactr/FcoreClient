import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarMonitorizacionProd from './NavBarMonitorizacionProd'
import NavBarSubprocesosMonit from './NavBarSubprocesosMonit'
import './visualizar.css'

export default function Visualizar() {
  const[lineaState, setLineaState]=useState('Linea1');
  const[subprocesoState, setSubprocesoState]=useState('Global');

const src = "https://app.powerbi.com/view?r=eyJrIjoiZGZkMzRkMDMtZGQzNS00ZTljLWFiZDctYjU1MjYzNDU3MzQwIiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9&pageName=ReportSectione3ea6f6954250cb503e0"
return (
<Fragment>
    <NavBarProd/>
    <NavBarSubprocesosMonit stateChanger={setSubprocesoState}/>
    <SideNav/>
    <NavBarMonitorizacionProd stateChanger={setLineaState}/>
    <iframe className="reporteProd" id="templates" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>

</Fragment>
)

}
