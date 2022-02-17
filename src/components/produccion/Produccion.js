import React, {Fragment, useState} from 'react';
import SideNav from '../sideNav/SideNav';
import App from '../../App'
import ReactDOM from 'react-dom';
import './produccion.css'
import NavBarProd from './NavBarProd';
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

    const src = "https://app.powerbi.com/reportEmbed?reportId=909c7d25-7eef-4bb1-9008-a44121d89abe&autoAuth=true&ctid=9a23e74b-ea09-47cf-a6eb-46dfacd632f5&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWItcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
    return (
        <Fragment>
          <NavBarProd/>
          <SideNav/>
          <iframe className="reporteProd" id="templates" title="reportePowerBI" src={src} frameborder="0" allowFullScreen={true}></iframe>
        </Fragment>
    );
}


export default Produccion;
