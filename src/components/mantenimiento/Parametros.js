import React, {Fragment, useState} from 'react';
import SideNav from '../sideNav/SideNav';
import './parametros.css';
import foto from './fotoMaquina.png'


const Parametros = () => {
    const onEnterPress = (e) => {
      if(e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        window.alert(`Variable ${e.target.id} introducida con el valor: ${e.target.value}`);
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
          <SideNav/>
          <div className="divBorde">

            <div className="divMant">
                <label className="textoMant">Velocidad de avance</label>
                <input type="text" className="inputMant" id="vel_avance" onKeyDown={onEnterPress}/>
                <label className="textoDer">C (Bend Arm) Velocity</label>
                <input type="text" className="inputMant" id="c_velocity" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Velocidad de corte</label>
                <input type="text" className="inputMant" id="vel_corte" onKeyDown={onEnterPress}/>
                <label className="textoDer">C (Bend Arm) Target Position</label>
                <input type="text" className="inputMant" id="c_pos" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Ciclos en vacío</label>
                <input type="text" className="inputMant" id="ciclos_vacio" onKeyDown={onEnterPress}/>
                <label className="textoDer">C (Bend Arm) Position Error</label>
                <input type="text" className="inputMant" id="c_posError" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Velocidad Y (Carriage)</label>
                <input type="text" className="inputMant" id="y_velocity" onKeyDown={onEnterPress}/>
                <label className="textoDer">C(Bend Arm) Command Pos</label>
                <input type="text" className="inputMant" id="c_commandPos" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Y(Target Pos) Scaled</label>
                <input type="text" className="inputMant" id="y_scaled" onKeyDown={onEnterPress}/>
                <label className="textoDer">C (Bend Arm) Acceleration</label>
                <input type="text" className="inputMant" id="c_acceleration" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Y (Carriage) Position Error</label>
                <input type="text" className="inputMant" id="y_posError" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Y (Carriage) DAC Output</label>
                <input type="text" className="inputMant" id="y_DAC" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Y(Carriage) Acceleration</label>
                <input type="text" className="inputMant" id="y_acceleration" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">B (Rotate) Velocity</label>
                <input type="text" className="inputMant" id="b_velocity" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">B(Rotate) Pos (Scaled)</label>
                <input type="text" className="inputMant" id="b_pos" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">B (Rotate) Pos Error</label>
                <input type="text" className="inputMant" id="b_posError" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">B (Rotate) Acceleration</label>
                <input type="text" className="inputMant" id="b_acceleration" onKeyDown={onEnterPress}/>
            </div>
            <img src={foto} className="fotoMaquina" alt="Máquina"/>





          </div>
        </Fragment>
    );
}

export default Parametros;
