import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import './machineLearning.css'
import NavBarProd from '../NavBarProd';
import NavBarProdAna from './NavBarProdAna';
import grafico from './graficaML.png'

const MachineLearning = () => {
    const onEnterPress = (e) => {
      if(e.keyCode === 13 && e.shiftKey === false) {
        if(e.target.value !== ''){
          e.preventDefault();
          window.alert(`Variable introducida con el valor: ${e.target.value}`);
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
          <NavBarProdAna/>
          <SideNav/>

            <h1 className="titulo">Simulación</h1>
            <div className="wrapperML" style={{display: 'flex', flexDirection: 'row'}}>
              <div>
                <div className="divML">
                    <label className="textoML">Numero de perfiles</label>
                    <input type="text" onKeyDown={onEnterPress}/>
                </div>
                <div className="divML">
                    <label className="textoML">Hora Inicio Turno (dd/mm/aaaa hh:mm)</label>
                    <input type="text" onKeyDown={onEnterPress}/>
                </div>
                <div className="divML">
                    <label className="textoML">Línea de producción</label>
                    <input type="text" onKeyDown={onEnterPress}/>
                </div>
                <div className="divML">
                    <label className="textoML">Artículo</label>
                    <input type="text" onKeyDown={onEnterPress}/>
                </div>
                <div className="divML">
                    <label className="textoML">Tiempo de ciclo (s.)</label>
                    <input type="text" onKeyDown={onEnterPress}/>
                </div>
                <div className="divML">
                    <label className="textoML">Jefe de turno</label>
                    <input type="text" onKeyDown={onEnterPress}/>
                </div>
                <div className="divML">
                    <label className="textoML">Proveedor materia prima</label>
                    <input type="text" onKeyDown={onEnterPress}/>
                </div>
                <div className="divML">
                    <label className="textoML">Temperatura ambiente</label>
                    <input type="text" onKeyDown={onEnterPress}/>
                </div>
              </div>

              <div style={{display: 'flex', flexDirection:'row'}}>
                <div className="divMerma">
                  <label className="subTitle">Prevision % Merma</label>
                  <div><label className="porcentajeMerma">3,22%</label></div>
                </div>
                <div className="divOEEE">
                  <label className="subTitle">Prevision % OEEE</label>
                  <div><label className="porcentajeOEEE">97,19%</label></div>
                </div>
              </div>
            </div>

            <h1 className="titulo2">Previsión Tendencia % OEEE</h1>
            <img className="grafico" src={grafico}/>






        </Fragment>
    );
}

export default MachineLearning;
