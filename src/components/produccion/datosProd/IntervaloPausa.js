import React, {Fragment,useEffect,useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarProdDatos from './NavBarProdDatos';
import TimePicker from 'react-time-picker'
import './pausas.css';
import IntervaloPausa from './IntervaloPausa'

const PausasProd = ({num,inicio,setInicio,fin,setFin}) => {

  const [valueInicio, onChangeInicio] = useState('09:30');
  const [valueFin, onChangeFin] = useState('10:00');

  let textoInicio = "Hora inicio pausa programada " + num
  let textoFin = "Hora fin pausa programada " + num


return (
  <Fragment>
    <NavBarProd/>
    <NavBarProdDatos/>
    <SideNav/>
    <div className="filaPausa">
      <div>
        <label className="textoDatosPausa">{textoInicio}</label>

        <input className="timePickerPausa" type="time" onChange={e => setInicio(e.target.value)} value={inicio}/>
      </div>
      <div>
        <label className="textoDatosPausa">{textoFin}</label>
        <input className="timePickerPausa" type="time" onChange={e => setFin(e.target.value)} value={fin}/>
      </div>
    </div>


  </Fragment>
)}

export default PausasProd;
