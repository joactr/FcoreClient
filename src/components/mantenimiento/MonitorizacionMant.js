import React, {Fragment, useState} from 'react';
import SideNav from '../sideNav/SideNav';
import './monitorizacionMant.css'
export default function reporte() {

  function urlChange(url) {
    var site = url+'?toolbar=0&amp;navpanes=0&amp;scrollbar=0';
    document.getElementById('reportePowerBI').src = site;
}
//
const src = "https://app.powerbi.com/view?r=eyJrIjoiNTE0YTEzZjQtYTU2ZC00ZmI2LThmZTctNThlY2NjM2U0YzBmIiwidCI6ImJlNDY1NWRmLWFjNzMtNDAxZi1hN2FlLTE5OGMzYjcyZDBjNiIsImMiOjh9"
return (
<Fragment>
  <SideNav/>
  <div className="divReporte">
    <label className="textoReporteBold">Línea perfiladora 1</label>
    <label className="textoReporte">Línea perfiladora 2</label>
    <label className="textoReporte">Línea perfiladora 3</label>

  </div>
  <iframe className="reporte" id="templates" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>;
  <button type="button" onClick={() => {urlChange('https://google.com');}}>Change</button>
</Fragment>
)

}
