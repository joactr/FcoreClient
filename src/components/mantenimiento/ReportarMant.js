import React, {Fragment, useState} from 'react';
import AsyncSelect from 'react-select/async';
import SideNav from '../sideNav/SideNav';
import NavBarMant from'./NavBarMant'
import './reportarMant.css';

const ReportarMant = () => {
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
          <NavBarMant/>
          <SideNav/>
          <form className="formReportarMant" onSubmit={enviarDatos}>
              <div>
                <label className="textoReportarMant">Línea:</label>
                <select className="selectReportarMant" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label class="textoReportarMantDer">Equipo:</label>
                <select className="selectReportarMant">
                  <option value="Perfiladora A01">Perfiladora A01</option>
                  <option value="Perfiladora A02">Perfiladora A02</option>
                  <option value="Perfiladora A03">Perfiladora A03</option>
                  <option value="Perfiladora A04">Perfiladora A04</option>
                  <option value="Perfiladora A05">Perfiladora A05</option>
                  <option value="Perfiladora A06">Perfiladora A06</option>
                  <option value="Perfiladora A07">Perfiladora A07</option>
                  <option value="Alimentador F01">Alimentador F01</option>
                  <option value="Alimentador F02">Alimentador F02</option>
                  <option value="Alimentador F03">Alimentador F03</option>
                  <option value="Alimentador F04">Alimentador F04</option>
                  <option value="Alimentador F05">Alimentador F05</option>
                  <option value="Alimentador F06">Alimentador F06</option>
                  <option value="Alimentador F07">Alimentador F07</option>
                  <option value="Flejadora S01">Flejadora S01</option>
                  <option value="Flejadora S02">Flejadora S02</option>
                  <option value="Flejadora S03">Flejadora S03</option>
                  <option value="Flejadora S04">Flejadora S04</option>
                  <option value="Impresora P01">Impresora P01</option>
                  <option value="Impresora P02">Impresora P02</option>
                  <option value="Impresora P03">Impresora P03</option>
                  <option value="Impresora P04">Impresora P04</option>
                  <option value="Impresora P05">Impresora P05</option>
                  <option value="Impresora P06">Impresora P06</option>
                  <option value="Impresora P07">Impresora P07</option>
                  <option value="Impresora P08">Impresora P08</option>
                  <option value="Impresora P09">Impresora P09</option>
                </select>
              </div>
              <div>
                <label className="textoReportarMant">Avería (dd/mm/aaaa hh:mm):</label>
                <AsyncSelect className="selectReportarMant"
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
              <iframe className="reporteReportarMant" id="reporteReportar" title="reporteReportar" src="https://app.powerbi.com/view?r=eyJrIjoiMTBkZmRhNzUtYjgwYy00OTBjLTg3MzMtNzM1OWI0NWY2MDA4IiwidCI6IjlhMjNlNzRiLWVhMDktNDdjZi1hNmViLTQ2ZGZhY2Q2MzJmNSIsImMiOjl9" frameBorder="0" allowFullScreen={true}></iframe>

              <div>
                <label className="textoReportarMant">Etiquetar avería:</label>
                <select className="selectReportarMant">
                  <option value="Fallo eléctrico">Fallo eléctrico</option>
                  <option value="Fallo mecánico">Fallo mecánico</option>
                  <option value="Fallo hidráulico">Fallo hidráulico</option>
                  <option value="Fallo neumático">Fallo neumático</option>
                  <option value="Error de software">Error de software</option>
                </select>
              </div>
              <div>
                <label className="textoReportarMant">Comentario:</label>
                <textarea className="commentReportarMant" id="commentReportar"/>
                <button type="submit" className="botonReportarMant">Enviar</button>
              </div>

          </form>

        </Fragment>
    );
}

export default ReportarMant;
