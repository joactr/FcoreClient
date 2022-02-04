import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Reportar from "./components/produccion/Reportar";
import Visualizar from "./components/produccion/Visualizar";
import Informes from "./components/produccion/analisis/Informes";
import CausaRaiz from "./components/produccion/analisis/CausaRaiz";
import MachineLearning from "./components/produccion/analisis/MachineLearning";
import Produccion from "./components/produccion/Produccion";
import ConfiguracionProduccion from "./components/produccion/configuracion/Configuracion";
import Limites from "./components/produccion/automatizar/Limites";
import Turnos from "./components/produccion/turnos/Turnos"
import Flujos from "./components/produccion/automatizar/Flujos";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Parametros from "./components/mantenimiento/Parametros";
import MonitorizacionMant from "./components/mantenimiento/MonitorizacionMant";
import ReportarMant from "./components/mantenimiento/ReportarMant";
import LimitesMant from "./components/mantenimiento/automatizar/LimitesMant";
import CambiarDatosProd from "./components/produccion/configuracion/CambiarDatosProd"

//https://stackoverflow.com/questions/47602010/react-router-authentication-redirection
function App() {

  return (
    <div className="App">
      <body className="App-body">

          <Redirect exact from="/" to="/login" />
          <Redirect exact from="/produccion/automatizar/" to="/login" />
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>

            <Route path="/produccion/parametros-produccion" component={Produccion}/>
            <Route path="/produccion/reportar" component={Reportar}/>
            <Route path="/produccion/turnos/1" component={Turnos}/>
            <Route path="/produccion/turnos/2" component={Turnos}/>
            <Route path="/produccion/turnos/3" component={Turnos}/>
            <Route path="/produccion/visualizar" component={Visualizar}/>

            <Route path="/produccion/analisis/informes" component={Informes}/>
            <Route path="/produccion/analisis/causa-raiz" component={CausaRaiz}/>
            <Route path="/produccion/analisis/machine-learning" component={MachineLearning}/>

            <Route path="/produccion/automatizar/limites" component={Limites}/> {/*AQUI EMPIEZA LA PAGINA DE AUTOMATIZAR*/}
            <Route path="/produccion/automatizar/flujos" component={Flujos}/>



            <Route path="/produccion/config/base" component={ConfiguracionProduccion}/>
            <Route path="/produccion/config/datos-prod" component={CambiarDatosProd}/>

            <Route path="/mantenimiento/parametros" component={Parametros}/>
            <Route path="/mantenimiento/monitorizacion" component={MonitorizacionMant}/>
            <Route path="/mantenimiento/reportar" component={ReportarMant}/>
            <Route path="/mantenimiento/automatizar/limites" component={LimitesMant}/>



            {/*REDIRECCIONES*/}
            <Route path="/produccion/config" render={() => (
              <Redirect exact to="/produccion/config/datos-prod" />)}/> {/*REDIRECCION A CONFIGURACION*/}
            <Route path="/produccion/analisis" render={() => (
              <Redirect exact to="/produccion/analisis/informes" />)}/> {/*REDIRECCION A ANALISIS*/}
            <Route path="/produccion/automatizar" render={() => (
              <Redirect exact to="/produccion/automatizar/limites" />)}/> {/*REDIRECCION A LIMITES*/}
              <Route path="/produccion/turnos" render={() => (
                <Redirect exact to="/produccion/turnos/1" />)}/> {/*REDIRECCION A TURNOS1*/}
            <Route path="/produccion" render={() => (
              <Redirect exact to="/produccion/parametros-produccion" />)}/> {/*REDIRECCION A PRODUCIÓN*/}


            <Route path="/mantenimiento/automatizar" render={() => (
              <Redirect exact to="/mantenimiento/automatizar/limites" />)}/> {/*REDIRECCION A LIMITES*/}
            <Route path="/mantenimiento" render={() => (
              <Redirect exact to="/mantenimiento/parametros" />)}/> {/*REDIRECCION A MANTENIMIENTO*/}

        <footer className="App-footer">
          <label className="footerText">Copyright © 2021 Enira Engineering</label>
        </footer>
      </body>

    </div>

  );

}

export default App;
