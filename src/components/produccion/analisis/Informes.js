import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import informes from './informes.png';
export default function Reporte() {

  function urlChange(url) {
    var site = url+'?toolbar=0&amp;navpanes=0&amp;scrollbar=0';
    document.getElementById('reportePowerBI').src = site;
}
//
const src = "https://app.powerbi.com/view?r=eyJrIjoiMjI4NzY2MjMtOTA4MS00MDBhLWE1MmMtMzc4NmRmMDBiNTEzIiwidCI6ImJlNDY1NWRmLWFjNzMtNDAxZi1hN2FlLTE5OGMzYjcyZDBjNiIsImMiOjh9"

const [linkReporte, setlinkReporte] = useState(null);

  //Actualiza el link del reporte con el recogido del back-end
  useEffect(() => {
    setlinkReporte('https://app.powerbi.com/view?r=eyJrIjoiMjI4NzY2MjMtOTA4MS00MDBhLWE1MmMtMzc4NmRmMDBiNTEzIiwidCI6ImJlNDY1NWRmLWFjNzMtNDAxZi1hN2FlLTE5OGMzYjcyZDBjNiIsImMiOjh9');
  });

return (
<Fragment>
  <SideNav/>
  <div className="divReporte">
    <label className="textoReporteBold">Producciones por Referencia P1</label>
    <label className="textoReporte">Otros gráficos Perfiladora 1</label>
    <label className="textoReporte">Producciones por Referencia P2</label>
    <label className="textoReporte">Otros gráficos Perfiladora 2</label>
    <label className="textoReporte">Producciones por Referencia P3</label>
    <label className="textoReporte">Otros gráficos Perfiladora 3</label>

  </div>
  <iframe className="reporteInforme" id="templates" title="reportePowerBI" src={linkReporte} frameborder="0" allowFullScreen={true}></iframe>;
  <button type="button" onClick={() => {urlChange('https://google.com');}}>Change</button>
</Fragment>
)

/*return(
  <Fragment>
    <SideNav/>
    <img src={informes} alt="informe" className="fotoReporte" height="auto"/>
  </Fragment>
)*/
}
