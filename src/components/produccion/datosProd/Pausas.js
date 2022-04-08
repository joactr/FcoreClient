import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarProdDatos from './NavBarProdDatos';
import TimePicker from 'react-time-picker'
import './pausas.css';
import IntervaloPausa from './IntervaloPausa'
import NavBarLineas from './NavBarLineas'

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


  function enviarDatos(event){
      event.preventDefault()
      let error = false;
      if(typeof(inicio1)!=typeof(fin1)){
        alert("Debe especificar ambos campos en pausa 1")
        error = true;}
      if(typeof(inicio2)!=typeof(fin2)){
        alert("Debe especificar ambos campos en pausa 2")
        error = true;}
      if(typeof(inicio3)!=typeof(fin3)){
        alert("Debe especificar ambos campos en pausa 3")
        error = true;}
      if(typeof(inicio4)!=typeof(fin4)){
        alert("Debe especificar ambos campos en pausa 4")
        error = true;}
      if(typeof(inicio5)!=typeof(fin5)){
        alert("Debe especificar ambos campos en pausa 5")
        error = true;}
      if(typeof(inicio6)!=typeof(fin6)){
        alert("Debe especificar ambos campos en pausa 6")
        error = true;}
      if(typeof(inicio7)!=typeof(fin7)){
        alert("Debe especificar ambos campos en pausa 7")
        error = true;}

      console.log("inicios: " + inicios)
      console.log("fines: " + inicios)

      if(!error){
        var reply = {
          linea:8,
          intervalos:[{inicio:inicio1,fin:fin1},
          {inicio:inicio2,fin:fin2},
          {inicio:inicio3,fin:fin3},
          {inicio:inicio4,fin:fin4},
          {inicio:inicio5,fin:fin5},
          {inicio:inicio6,fin:fin6},
          {inicio:inicio7,fin:fin7}]
        }
        console.log(reply)

        var data = JSON.stringify(reply)
          console.log('enviando intervalos')
          fetch(global.backend+"/setPausas" ,
          {
            headers: {
            'token': localStorage.getItem('jwt_token'),
             'Content-type': 'application/json; charset=UTF-8',
             'Access-Control-Allow-Origin': '*'
           },
               method: "POST",
               body: data

          }).then((response)=> {
            if(response.ok){
                window.alert(`Modificación publicada con éxito`);
            }else {
                window.alert(`Error al publicar datos, vuelva a intentarlo en unos segundos`);
            }
          })
      }
    }

return (
  <Fragment>
    <NavBarProd/>
    <NavBarProdDatos/>
    <SideNav/>

    <div className="wrapperSelectLineaPausa">
      <label>Línea:</label>
      <select className="selectLineaPausa">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option selected value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div className="wrapperDatosPausa">
      <IntervaloPausa num="1" inicio={inicio1} setInicio={setInicio1} fin={fin1} setFin={setFin1}/>
      <IntervaloPausa num="2" inicio={inicio2} setInicio={setInicio2} fin={fin2} setFin={setFin2}/>
      <IntervaloPausa num="3" inicio={inicio3} setInicio={setInicio3} fin={fin3} setFin={setFin3}/>
      <IntervaloPausa num="4" inicio={inicio4} setInicio={setInicio4} fin={fin4} setFin={setFin4}/>
      <IntervaloPausa num="5" inicio={inicio5} setInicio={setInicio5} fin={fin5} setFin={setFin5}/>
      <IntervaloPausa num="6" inicio={inicio6} setInicio={setInicio6} fin={fin6} setFin={setFin6}/>
      <IntervaloPausa num="7" inicio={inicio7} setInicio={setInicio7} fin={fin7} setFin={setFin7}/>
      <button className="buttonEnviarPausas" onClick={enviarDatos}>Enviar</button>
    </div>

  </Fragment>
)}

export default PausasProd;
