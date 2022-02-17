import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarMonitorizacionProd from './NavBarMonitorizacionProd'
import NavBarSubprocesosMonit from './NavBarSubprocesosMonit'
import './visualizar.css'

export default function reporte() {


const src = "https://app.powerbi.com/reportEmbed?reportId=10589d29-6972-4c87-ab92-f43c92117415&autoAuth=true&ctid=9a23e74b-ea09-47cf-a6eb-46dfacd632f5&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWItcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
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
