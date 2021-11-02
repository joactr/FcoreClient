import React, {Fragment, useState} from 'react';
import SideNav from "../sideNav/SideNavProduccion";
import './reportar.css';

const Reportar = () => {
    const [datos, setDatos] = useState({
        horas: '',
        minutos: '',
        segundos: '',
        atributo: '',
        valor: '',
        comentario: ''
    })
    var fechabase = new Date()

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        window.alert("Datos enviados");
    }



    return (
        <Fragment>
          <SideNav/>
          <form className="formReportar" onSubmit={enviarDatos}>
              <div>
                <label className="textoReportar">Selección incidencia (dd/mm/aaaa hh:mm):</label>
                <select className="selectReportar" >
                  <option value="03/10/2021 13:43">03/10/2021 13:43</option>
                  <option value="01/10/2021 11:01">02/10/2021 11:01</option>
                  <option value="03/10/2021 13:43">01/10/2021 13:43</option>
                  <option value="01/10/2021 11:01">01/10/2021 10:41</option>
                  <option value="03/10/2021 13:43">27/09/2021 18:50</option>
                  <option value="01/10/2021 11:01">26/09/2021 10:51</option>
                  <option value="03/10/2021 13:43">24/09/2021 08:10</option>
                  <option value="01/10/2021 11:01">20/09/2021 11:11</option>
                  <option value="03/10/2021 13:43">13/09/2021 23:12</option>
                  <option value="01/10/2021 11:01">01/09/2021 01:23</option>
                  <option value="03/10/2021 13:43">03/09/2021 23:00</option>
                  <option value="01/10/2021 11:01">30/08/2021 14:03</option>
                  <option value="03/10/2021 13:43">24/08/2021 16:34</option>
                  <option value="01/10/2021 11:01">23/08/2021 09:45</option>
                  <option value="03/10/2021 13:43">20/08/2021 12:43</option>
                  <option value="01/10/2021 11:01">16/08/2021 11:37</option>
                  <option value="03/10/2021 13:43">13/08/2021 19:20</option>
                  <option value="01/10/2021 11:01">09/08/2021 10:41</option>
                </select>
              </div>
              <div>
                <label className="textoReportar">Etiquetar incidencia:</label>
                <select className="selectReportar">
                <option value="03/10/2021 13:43">Falta de material</option>
                <option value="01/10/2021 11:01">Paro programado</option>
                <option value="03/10/2021 13:43">Avería</option>
                <option value="01/10/2021 11:01">Avería proceso anterior</option>
                <option value="03/10/2021 13:43">Paro calidad</option>
                </select>
              </div>
              <div>
                <label className="textoReportar">Añadir comentario:</label>
                <textarea className="commentReportar"/>
                <button type="submit" className="botonReportar">Enviar</button>
              </div>
              <div>
              <iframe className="reporteReportar" id="reporteReportar" title="reporteReportar" src="https://app.powerbi.com/view?r=eyJrIjoiMTBkZmRhNzUtYjgwYy00OTBjLTg3MzMtNzM1OWI0NWY2MDA4IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9" frameBorder="0" allowFullScreen={true}></iframe>
              </div>
          </form>
        </Fragment>
    );
}

export default Reportar;
