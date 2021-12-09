import React, {Fragment, useState} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarProdAut from './NavBarProdAut'
import logoLimites from './logoLimites.png'
import './limites.css';

export default function Limites() {
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
    <NavBarProd/>
    <NavBarProdAut/>
    <SideNav/>
    <div className="divLimite">
      <form className="formLimite" id="temperaturaForm">
        <label className="textoLimite">Numero de perfiles orden línea 3</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="vibracionesForm">
        <label className="textoLimite">Tiempo de paro línea 2 (m)</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="piezasForm">
        <label className="textoLimite">Piezas NOK consecutivas</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">% Merma</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">% Avería</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">Trabajo en curso</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">Operarios en la línea</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">Consumo energético Línea 1</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">Piezas O.T. ERP</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">% Lluvia previsión meteorológica AEMET</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">Email Dirección general</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">Temperatura del horno línea 2 zona B</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">Numero de repuestos quemador línea 2</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
      <form className="formLimite" id="horasForm">
        <label className="textoLimite">Conductividad depósito 2A</label>
        <input type="number" placeholder="Mayor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMin" name="min"/>
        <input type="number" placeholder="Menor que" step="0.001" presicion={2} onChange={handleInputChange} onKeyDown={onEnterPress} className="inputLimiteMax" name="max"/>
      </form>
    </div>
    <img className="logoLimitesProd" src={logoLimites}/>

  </Fragment>
  )
}
