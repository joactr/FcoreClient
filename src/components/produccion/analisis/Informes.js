import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import informes from './informes.png';
import NavBarProd from '../NavBarProd';
export default function Reporte() {



//https://app.powerbi.com/view?r=eyJrIjoiMjI4NzY2MjMtOTA4MS00MDBhLWE1MmMtMzc4NmRmMDBiNTEzIiwidCI6ImJlNDY1NWRmLWFjNzMtNDAxZi1hN2FlLTE5OGMzYjcyZDBjNiIsImMiOjh9

const [linkReporte, setlinkReporte] = useState(null);

  //Actualiza el link del reporte con el recogido del back-end
  //https://factorybibackend.herokuapp.com
  useEffect(() => {
    fetch('https://factorybibackend.herokuapp.com/getReporteBI')
      .then(response => response.json())
      .then(data => {
        setlinkReporte(data);
      }
    );
  });

return (
<Fragment>
  <NavBarProd/>
  <SideNav/>
  <iframe className="reporteInforme" id="templates" title="reportePowerBI" src={linkReporte} frameborder="0" allowFullScreen={true}></iframe>
</Fragment>
)

}
