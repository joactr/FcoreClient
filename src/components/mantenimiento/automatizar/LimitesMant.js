import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarMant from'../NavBarMant'
import logoLimites from './logoLimites.png'
import './limitesMant.css';

export default function LimitesMant() {
  function clicked(){
    window.alert('Límites modificados');
  }
  const [datos, setDatos] = useState({
      min: '',
      max: ''
  })

  const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
  }

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

  const resetForm = (formID) =>{
    document.getElementById(formID).reset();
  }

  const enviarDatos = (event) => {
      event.preventDefault()
      var nombre = event.target.id;
      console.log(nombre);
      if(datos.min !=='' || datos.max !==''){
        var reply = {
          atributo: nombre,
          min: datos.min,
          max: datos.max
        }
        datos.min = '' //ELIMINA LOS VALORES PARA QUE NO QUEDE RASTRO
        datos.max = ''

        resetForm(nombre+"Form"); //LIMPIA LOS INPUTS DEL FORMULARIO INTRODUCIDO

        var data = JSON.stringify(reply)
          console.log('enviando cambio de limite' + reply.min + ' ' + reply.max)
          //http://localhost:8080
          //https://factorybibackend.herokuapp.com
          fetch("https://factorybibackend.herokuapp.com/limites" ,
          {
            headers: {
             'Content-type': 'application/json; charset=UTF-8',
             'Access-Control-Allow-Origin': '*'
           },
               method: "POST",
               body: data

          }).then((response)=> {
            if(response.ok){
              if(reply.min !=='' && reply.max !==''){
                window.alert(`Modificación publicada con éxito sobre ${nombre} con los valores min:${reply.min} y max:${reply.max}`);
              }else if (reply.min !=='' && reply.max ==='') {
                window.alert(`Modificación publicada con éxito sobre ${nombre} con el valor min:${reply.min}`);
              }else {
                window.alert(`Modificación publicada con éxito sobre ${nombre} con el valor max:${reply.max}`);
              }
            }else {
                window.alert(`Error al publicar datos, vuelva a intentarlo en unos segundos`);
            }
          })
      }else {
        window.alert("Por favor introduzca un valor ");
      }
    }

  //PARA AÑADIR VARIABLES PONER ID AL BOTON CON NOMBRE, Y EL FORM CON ESE NOMBRE+"FORM"
  return (
  <Fragment>
    <NavBarMant/>
    <SideNav/>
    <div className="wrapperCambioPagMant">
    <label className="textoCambioPagMant">Página 1</label>
    <button type="button" className="botonCambioPagMant">></button>
    </div>
    <div className="divLimiteMant">
      <form className="formLimiteMant" id="temperaturaForm">
        <label className="textoLimiteMant">mm/s RMS motor quemador 1 Horno L1</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="vibracionesForm">
        <label className="textoLimiteMant">g RMS motor quemador 1 Horno L1</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="piezasForm">
        <label className="textoLimiteMant">mm/s RMS motor quemador 2 Horno L1</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">g RMS motor quemador 2 Horno L1</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">mm/s RMS motor quemador 1 Horno L2</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">g RMS motor quemador 1 Horno L2</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">mm/s RMS motor quemador 2 Horno L2</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">g RMS motor quemador 2 Horno L2</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">mm/s RMS motor quemador 1 Horno L3</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">g RMS motor quemador 1 Horno L3</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">mm/s RMS motor quemador 2 Horno L3</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">g RMS motor quemador 2 Horno L3</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
      <form className="formLimiteMant" id="horasForm">
        <label className="textoLimiteMant">Conductividad depósito 2A</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMinMant" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMaxMant" name="max"/>
      </form>
    </div>
    <img className="logoLimitesMant" src={logoLimites}/>
  </Fragment>
  )
}
