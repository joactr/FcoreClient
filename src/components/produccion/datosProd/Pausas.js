import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarProdDatos from './NavBarProdDatos';
import TimePicker from 'react-time-picker'
import './pausas.css';
import IntervaloPausa from './IntervaloPausa'

const PausasProd = () => {

  const [inicio1, setInicio1] = useState('09:30');
  const [fin1, setFin1] = useState('10:00');

  const [inicio2, setInicio2] = useState(null);
  const [fin2, setFin2] = useState(null);

  const [inicio3, setInicio3] = useState(null);
  const [fin3, setFin3] = useState(null);

  const [inicio4, setInicio4] = useState(null);
  const [fin4, setFin4] = useState(null);

  const [inicio5, setInicio5] = useState(null);
  const [fin5, setFin5] = useState(null);

  const [inicio6, setInicio6] = useState(null);
  const [fin6, setFin6] = useState(null);

  const [inicio7, setInicio7] = useState(null);
  const [fin7, setFin7] = useState(null);

  let inicios = [inicio1,inicio2,inicio3,inicio4,inicio5,inicio6,inicio7];
  let fines = [fin1,fin2,fin3,fin4,fin5,fin6,fin7];

  useEffect(() => {  //CHECK FUNCIONAL, IMPRIME VALOR DE FIN 1 cuando cambia el valor de inicio1

    console.log(inicios)
    console.log(fines)
    console.log("printing--------------")
  },[inicio1])

  function enviarDatos(){
    alert("inicios: " + inicios)
    alert("fines: " + inicios)
  }

return (
  <Fragment>
    <NavBarProd/>
    <NavBarProdDatos/>
    <SideNav/>

    <div className="wrapperDatosPausa">
      <IntervaloPausa num="1" inicio={inicio1} setInicio={setInicio1} fin={fin1} setFin={setFin1}/>
      <IntervaloPausa num="2" inicio={inicio2} setInicio={setInicio2} fin={fin2} setFin={setFin2}/>
      <IntervaloPausa num="3" inicio={inicio3} setInicio={setInicio3} fin={fin3} setFin={setFin3}/>
      <IntervaloPausa num="4" inicio={inicio4} setInicio={setInicio4} fin={fin4} setFin={setFin4}/>
      <IntervaloPausa num="5" inicio={inicio5} setInicio={setInicio5} fin={fin5} setFin={setFin5}/>
      <IntervaloPausa num="6" inicio={inicio6} setInicio={setInicio6} fin={fin6} setFin={setFin6}/>
      <IntervaloPausa num="7" inicio={inicio7} setInicio={setInicio7} fin={fin7} setFin={setFin7}/>
      <button onClick={enviarDatos}>Enviar</button>
    </div>

  </Fragment>
)}

export default PausasProd;
