import React, {Fragment, useState} from 'react';
import AsyncSelect from 'react-select/async';
import SideNav from '../sideNav/SideNav';
import NavBarProd from './NavBarProd';
import './reportar.css';

const Reportar = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

    const [datos, setDatos] = useState({
        horas: '',
        minutos: '',
        segundos: '',
        atributo: '',
        valor: '',
        comentario: ''
    })
    var fechabase = new Date()

    /*const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }*/

    // handle input change event
    const handleInputChange = value => {
      setValue(value);
    };

    // handle selection
    const handleChange = value => {

      setSelectedValue(value);
    }

    //Coge los datos de últimas fechas del back-end
    var fetchData = (inputValue, callback) => {
      setTimeout(() => {
        fetch("https://factorybibackend.herokuapp.com/getFechas",
          {
            method: "GET",
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data)
            const tempArray = [];
            if (data) {
              if (data.length) {
                data.forEach((element) => {

                  //SE LE DA FORMATO DESEADO A LA FECHA AL MOSTRAR
                  var año = element.Datetime.slice(0, 4)
                  var mes = element.Datetime.slice(5, 7)
                  var dia = element.Datetime.slice(8, 10)
                  var hora = element.Datetime.slice(11, 19)
                  tempArray.push({
                    label: `${dia}/${mes}/${año}  ${hora}`,
                    value: element.Datetime,
                  });
                });
              } else {
                tempArray.push({
                  label: `${data.Datetime}`,
                  value: data.id,
                });
              }
            }
            callback(tempArray);
          })
          .catch((error) => {
            console.log(error, "catch the hoop");
          });
      }, 1000);
    };

    const enviarDatos = (event) => {
        event.preventDefault()
        window.alert("Datos enviados");
    }

    var styles = {
      color: 'black'
  };


  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#F2F2F2",
      borderWidth: "2px",
      borderColor: "#E0E0E0",
      height: "27px",

    })
  };


    return (
        <Fragment>
          <NavBarProd/>
          <SideNav/>
          <div className="wrapperReportarProd">
            <form className="formReportar" onSubmit={enviarDatos}>
                <div>
                  <label className="textoReportar">Línea / Proceso:</label>
                  <select className="selectReportarsmall" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <select className="selectReportarsmall" >
                    <option value="Cuadradillo">Cuadradillo</option>
                    <option value="Testero">Testero</option>
                    <option value="Lateral">Lateral</option>
                    <option value="Fondo">Fondo</option>
                    <option value="Envasado">Envasado</option>

                  </select>
                </div>
                <div>
                  <label className="textoReportar">Selección incidencia (dd/mm/aaaa hh:mm):</label>
                  <AsyncSelect className="selectReportar"
                      cacheOptions
                      defaultOptions
                      placeholder="Seleccione una fecha"
                      styles={customStyles}
                      value={selectedValue}
                      loadOptions={fetchData}
                      onInputChange={handleInputChange}
                      onChange={handleChange}
                      defaultOptions={true}
                            />
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
                  <textarea className="commentReportar" id="commentReportar"/>
                  <button type="submit" className="botonReportar">Enviar</button>
                </div>
                <iframe className="reporteReportar" id="reporteReportar" title="reporteReportar" src="https://app.powerbi.com/view?r=eyJrIjoiMTBkZmRhNzUtYjgwYy00OTBjLTg3MzMtNzM1OWI0NWY2MDA4IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9" frameBorder="0" allowFullScreen={true}></iframe>

            </form>
          </div>
        </Fragment>
    );
}

export default Reportar;
