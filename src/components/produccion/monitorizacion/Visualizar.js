import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarMonitorizacionProd from './NavBarMonitorizacionProd'
import NavBarSubprocesosMonit from './NavBarSubprocesosMonit'
import './visualizar.css'

export default function reporte() {


const src = "https://app.powerbi.com/view?r=eyJrIjoiNWFkZjE4MmMtNWM5ZS00NmNjLWE2YTAtYjQ0MWJlNjZmMmNjIiwidCI6ImJlNDY1NWRmLWFjNzMtNDAxZi1hN2FlLTE5OGMzYjcyZDBjNiIsImMiOjh9&pageName=ReportSection"
return (
<Fragment>
    <NavBarProd/>
    <NavBarMonitorizacionProd/>
    <NavBarSubprocesosMonit/>
    <SideNav/>
  <iframe className="reporteProd" id="templates" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>
</Fragment>
)

}
