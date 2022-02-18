import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import './turnos.css'
import NavBarProd from '../NavBarProd';
import NavBarTurnos from './NavBarTurnos'

const Turnos = () => {
  const[lineaState, setLineaState]=useState('Linea1');


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

    return (
        <Fragment>
          <NavBarProd/>
          <NavBarTurnos stateChanger={setLineaState}/>
          <SideNav/>
          <label className="labelTurnos">{lineaState}</label>
          <div className="wrapperTurnosProd">
            {/* Inicio de los contenedores de turnos */}
            <div className="turnosContainer">
              <form className="formTurnos"><label className="tituloTurnos">Inicio Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
              <form className="formTurnos"><label className="tituloTurnos">Fin Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
            </div>

            <div className="turnosContainer">
              <form className="formTurnos"><label className="tituloTurnos">Inicio Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
              <form className="formTurnos"><label className="tituloTurnos">Fin Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
            </div>

            <div className="turnosContainer">
              <form className="formTurnos"><label className="tituloTurnos">Inicio Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
              <form className="formTurnos"><label className="tituloTurnos">Fin Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
            </div>

            <div className="turnosContainer">
              <form className="formTurnos"><label className="tituloTurnos">Inicio Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
              <form className="formTurnos"><label className="tituloTurnos">Fin Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>

              </form>
            </div>

            <div className="turnosContainer">
              <form className="formTurnos"><label className="tituloTurnos">Inicio Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
              <form className="formTurnos"><label className="tituloTurnos">Fin Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
            </div>

            <div className="turnosContainer">
              <form className="formTurnos"><label className="tituloTurnos">Inicio Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
              <form className="formTurnos"><label className="tituloTurnos">Fin Turno</label>
                <label className="labelTurnos">Día (dd) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Mes (mm) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Año (aaaa) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Hora (hh) </label>
                  <input type="text" className="inputTurnos"></input>
                <label className="labelTurnos">Minuto (mm) </label>
                  <input type="text" className="inputTurnos"></input>
              </form>
            </div>
          </div>
        </Fragment>
    );
}

export default Turnos;
