import React, {Fragment, useState} from 'react';
import SideNav from '../sideNav/SideNav';
import './produccion.css'
import NavBarProd from './NavBarProd';

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

            <div className="prod">
                <label className="textoProd">Número de perfiles (#)</label>
                <input type="text" className="inputProd" id="perfiles" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Hora Inicio Turno (dd/mm/aaa hh:mm)</label>
                <input type="text" className="inputProd" id="inicio_turno" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Hora Final turno (dd/mm/aaa hh:mm)</label>
                <input type="text" className="inputProd" id="final_turno" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Artículo (#)</label>
                <input type="text" className="inputProd" id="articulo" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Orden de Fabr. (#)</label>
                <input type="text" className="inputProd" id="orden" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de ciclo (s.)</label>
                <input type="text" className="inputProd" id="tiempo_ciclo" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Ratio de Merma (%)</label>
                <input type="text" className="inputProd" id="ratio_merma" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de Microparo (s.)</label>
                <input type="text" className="inputProd" id="tiempo_microparo" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de avería (s.)</label>
                <input type="text" className="inputProd" id="tiempo_averia" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de Falta Material (s.)</label>
                <input type="text" className="inputProd" id="tiempo_falta_material" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de Paro 1 (s.)</label>
                <input type="text" className="inputProd" id="tiempo_paro" onKeyDown={onEnterPress}/>
            </div>
            <div className="prod">
                <label className="textoProd">Pausa producción</label>
                <select className="selectReportar" className="selectProd" onChange={onChange} defaultValue={''} >
                  <option selected disabled hidden></option>
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                </select>
            </div>





          </div>
        </Fragment>
    );
}

export default Produccion;
