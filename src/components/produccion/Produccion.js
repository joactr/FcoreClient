import React, {Fragment, useState} from 'react';
import stop from "./Stop.png";
import SideNav from "../sideNav/SideNav";
import './produccion.css'

const Produccion = () => {
    const [datos, setDatos] = useState({
        horas: '',
        minutos: '',
        segundos: '',
        atributo: '',
        valor: '',
        comentario: ''
    })
    var fechabase = new Date()
    const [startDate, setStartDate] = useState(fechabase);

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
      window.alert("Datos enviados");
    }

    function clicked(){
      window.alert('Variable introducida');
    }

    function parar(){
      window.alert('Producción parada');
    }
//<div className="divProduccion">


    return (
        <Fragment>
          <SideNav/>

          <label className="title">Datos producción en curso</label>

          <div className="divBorde">
            <div className="stopProd">
              <div>
                <img src={stop} className="stopLogo" alt="logo" onClick={parar}/>
              </div>
              <label className="textoStopProd">Paro Programado</label>
            </div>

            <div className="prod">
                <label className="textoProd">Número de perfiles (#)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Hora Inicio Turno (dd/mm/aaa hh:mm)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Hora Final turno (dd/mm/aaa hh:mm)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Artículo (#)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Orden de Fabr. (#)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de ciclo (s.)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Ratio de Merma (%)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de Microparo (s.)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de avería (s.)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de Falta Material (s.)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>
            <div className="prod">
                <label className="textoProd">Tiempo de Paro 1 (s.)</label>
                <input type="text" className="inputProd"/>
                <button type="button" onClick={clicked} className="botonProd">Introducir</button>
            </div>





          </div>
        </Fragment>
    );
}

export default Produccion;
