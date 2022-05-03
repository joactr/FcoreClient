import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import App from '../../../App'
import ReactDOM from 'react-dom';
import './produccion.css'
import NavBarProd from '../NavBarProd';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Produccion = () => {
  const onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      const elements = Array.from(document.getElementsByClassName("inputProd"));
      console.log(elements);
      console.log(elements[1].value);//SE PUEDE HACER UN BUCLE QUE RECORRA TODOS Y PONGA VALUE = ''
      if(e.target.value !== ''){
        e.preventDefault();
        window.alert(`Variable ${e.target.id} introducida con el valor: ${e.target.value}`);
        e.target.value ='';
      }else{
        window.alert(`Por favor introduzca un valor válido`);
      }
    }
  }
    const onChange = (e) => {
      if(e.target.value === "SI"){
        window.alert(`Se ha parado la producción`);
      }else{
        window.alert(`Se ha reanudado la producción`);
      }
    }

    const src = "https://app.powerbi.com/view?r=eyJrIjoiMmFmNjMzMTktNzMxMi00MDg1LWE2ZjMtNzFlYmI4OGFkODY2IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9&pageName=ReportSection67ca09645d34530f37b5"
    return (
        <Fragment>
          <NavBarProd/>
          <SideNav/>
          <iframe className="reporteDatosProd" id="templates" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>
        </Fragment>
    );
}


export default Produccion;
