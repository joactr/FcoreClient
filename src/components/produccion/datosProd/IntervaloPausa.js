import React, {Fragment,useEffect,useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarProdDatos from './NavBarProdDatos';
import TimePicker from 'react-time-picker'
import './pausas.css';
import IntervaloPausa from './IntervaloPausa'

const PausasProd = ({num,inicio,setInicio,fin,setFin}) => {

  const [valueInicio, onChangeInicio] = useState(null);
  const [valueFin, onChangeFin] = useState(null);

  let textoInicio = "Hora inicio pausa programada " + num
  let textoFin = "Hora fin pausa programada " + num

  /*useEffect(() => {
    if(typeof(inicio) != typeof(fin)){ //Si alguno no es nulo
      if(typeof(inicio)!='string'){document.getElementById("tiempoInicio"+num).required=true}
    }
  },[inicio,fin])*/


return (
  <Fragment>
    <NavBarProd/>
    <NavBarProdDatos/>
    <SideNav/>
    <div className="filaPausa">
      <div>
        <label className="textoDatosPausa">{textoInicio}</label>

        <input className="timePickerPausa" type="time" id={"tiempoInicio"+num} onChange={e => setInicio(e.target.value)} value={inicio}/>
      </div>
      <div>
        <label className="textoDatosPausa">{textoFin}</label>
        <input className="timePickerPausa" type="time" id={"tiempoFin"+num} onChange={e => setFin(e.target.value)} value={fin}/>
      </div>
    </div>


  </Fragment>
)}

export default PausasProd;
