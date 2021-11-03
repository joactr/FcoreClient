import React, {Fragment, useState} from 'react';
import SideNav from '../sideNav/SideNav';
import informes from './informes.png';
export default function reporte() {

  function urlChange(url) {
    var site = url+'?toolbar=0&amp;navpanes=0&amp;scrollbar=0';
    document.getElementById('reportePowerBI').src = site;
}
//
const src = "https://app.powerbi.com/view?r=eyJrIjoiNWFkZjE4MmMtNWM5ZS00NmNjLWE2YTAtYjQ0MWJlNjZmMmNjIiwidCI6ImJlNDY1NWRmLWFjNzMtNDAxZi1hN2FlLTE5OGMzYjcyZDBjNiIsImMiOjh9&pageName=ReportSection"

  /*return (
  <Fragment>
    <SideNav/>
    <iframe className="reporte" id="templates" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>;
    <button type="button" onClick={() => {urlChange('https://google.com');}}>Change</button>
  </Fragment>
)*/

return(
  <Fragment>
    <SideNav/>
    <img src={informes} alt="informe" className="reporte" height="auto"/>
  </Fragment>
)
}
