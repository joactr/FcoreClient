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

    return (
        <Fragment>
          <NavBarProd/>
          <SideNav/>
          <div className="wrapperParamsProd">






          </div>
        </Fragment>
    );
}


export default Produccion;
