import React, {Fragment, useState} from 'react';
import SideNav from '../sideNav/SideNav';
import NavBarMant from'./NavBarMant'
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
  <NavBarMant/>
  <SideNav/>
  <iframe className="reporte" id="templates" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>;
  <button type="button" onClick={() => {urlChange('https://google.com');}}>Change</button>
</Fragment>
)

}
