import React, {Fragment, useState} from 'react';
import SideNavAutomatizar from './SideNavAutomatizar';
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
        console.log('enviando datos...' + reply.min + ' ' + reply.max)
      fetch("https://factorybibackend.herokuapp.com/formulario",
      {
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
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

  return (
  <Fragment>
    <SideNavAutomatizar/>
    //PARA AÑADIR VARIABLES PONER ID AL BOTON CON NOMBRE, Y EL FORM CON ESE NOMBRE+"FORM"
    <div className="divLimite">
    <form className="formLimite" id="temperaturaForm">
      <label className="textoLimite">Temperatura:</label>
      <input type="number" placeholder="min" step="0.001" presicion={2} onChange={handleInputChange} className="inputLimiteMin" name="min"/>
      <input type="number" placeholder="max" step="0.001" presicion={2} onChange={handleInputChange} className="inputLimiteMax" name="max"/>
      <button type="button" onClick={enviarDatos} className="botonLimite" id="temperatura">Introducir</button>
    </form>
    <form className="formLimite" id="vibracionesForm">
      <label className="textoLimite">Vibraciones:</label>
      <input type="number" placeholder="min" step="0.001" presicion={2} onChange={handleInputChange} className="inputLimiteMin" name="min"/>
      <input type="number" placeholder="max" step="0.001" presicion={2} onChange={handleInputChange} className="inputLimiteMax" name="max"/>
      <button type="button" onClick={enviarDatos} className="botonLimite" id="vibraciones">Introducir</button>
    </form>
    <form className="formLimite" id="piezasForm">
      <label className="textoLimite">Número de piezas:</label>
      <input type="number" placeholder="min" step="0.001" presicion={2} onChange={handleInputChange} className="inputLimiteMin" name="min"/>
      <input type="number" placeholder="max" step="0.001" presicion={2} onChange={handleInputChange} className="inputLimiteMax" name="max"/>
      <button type="button" onClick={enviarDatos} className="botonLimite" id="piezas">Introducir</button>
    </form>
    <form className="formLimite" id="horasForm">
      <label className="textoLimite">Número de horas:</label>
      <input type="number" placeholder="min" step="0.001" presicion={2} onChange={handleInputChange} className="inputLimiteMin" name="min"/>
      <input type="number" placeholder="max" step="0.001" presicion={2} onChange={handleInputChange} className="inputLimiteMax" name="max"/>
      <button type="button" onClick={enviarDatos} className="botonLimite" id="horas">Introducir</button>
    </form>

    </div>
  </Fragment>
  )
}
