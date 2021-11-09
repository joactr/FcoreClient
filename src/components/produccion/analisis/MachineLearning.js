import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';

const MachineLearning = () => {
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
            </div>
            <div className="divMant">
                <label className="textoMant">Velocidad de corte</label>
                <input type="text" className="inputMant" id="vel_corte" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Ciclos en vacío</label>
                <input type="text" className="inputMant" id="ciclos_vacio" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Velocidad Y (Carriage)</label>
                <input type="text" className="inputMant" id="y_velocity" onKeyDown={onEnterPress}/>
            </div>
            <div className="divMant">
                <label className="textoMant">Y(Target Pos) Scaled</label>
                <input type="text" className="inputMant" id="y_scaled" onKeyDown={onEnterPress}/>
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






          </div>
        </Fragment>
    );
}

export default MachineLearning;
