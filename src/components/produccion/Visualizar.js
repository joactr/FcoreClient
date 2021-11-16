import React, {Fragment, useState} from 'react';
import SideNav from '../sideNav/SideNav';
import './visualizar.css'
export default function reporte() {


const src = "https://app.powerbi.com/view?r=eyJrIjoiNWFkZjE4MmMtNWM5ZS00NmNjLWE2YTAtYjQ0MWJlNjZmMmNjIiwidCI6ImJlNDY1NWRmLWFjNzMtNDAxZi1hN2FlLTE5OGMzYjcyZDBjNiIsImMiOjh9&pageName=ReportSection"
return (
<Fragment>
  <SideNav/>
  <div className="divReporte">
    <label className="textoReporteBold">Línea perfiladora 1</label>
    <label className="textoReporte">Línea perfiladora 2</label>
    <label className="textoReporte">Línea perfiladora 3</label>

  </div>
  <iframe className="reporte" id="templates" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>;
</Fragment>
)

}
