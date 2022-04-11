import "./App.css";
import { Route, Redirect } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Reportar from "./components/produccion/Reportar";
import Visualizar from "./components/produccion/monitorizacion/Visualizar";
import Informes from "./components/produccion/analisis/Informes";
import CausaRaiz from "./components/produccion/analisis/CausaRaiz";
import MachineLearning from "./components/produccion/analisis/MachineLearning";
import Produccion from "./components/produccion/datosProd/Produccion";
import PausasProd from "./components/produccion/datosProd/Pausas"
import UploadingReportesProd from "./components/produccion/configuracion/UploadingReportesProd";
import UsuariosConfigProd from "./components/produccion/configuracion/UsuariosConfigProd"
import NivelesConfigProd from "./components/produccion/configuracion/NivelesConfigProd"
import CambiarDatosProd from "./components/produccion/configuracion/CambiarDatosProd"
import Limites from "./components/produccion/automatizar/Limites";
import Flujos from "./components/produccion/automatizar/Flujos";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Parametros from "./components/mantenimiento/Parametros";
import MonitorizacionMant from "./components/mantenimiento/MonitorizacionMant";
import ReportarMant from "./components/mantenimiento/ReportarMant";
import LimitesMant from "./components/mantenimiento/automatizar/LimitesMant";
import SideNav from './components/sideNav/SideNav';
import PrivateRoute from "./components/PrivateRoute";

//https://stackoverflow.com/questions/47602010/react-router-authentication-redirection
function App() {
  const[isAuth, setIsAuth]=useState(localStorage.getItem('isLoggedIn'));
  const[userLevel, setUserLevel]=useState(localStorage.getItem('nivel'));

  useEffect(() => {console.log(isAuth);},[isAuth])

  return (
    <body className="App-body">

          {/*Si está loggeado va a home, si no tiene que loggearse*/}
          <Redirect exact from="/" to={isAuth ? "/home" : "/login"} />

          <Route path="/login" render={(props) => (
              <Login setAuth={setIsAuth} setNivel={setUserLevel} />
          )} />

          <PrivateRoute path="/home" component={Home} isAuth={isAuth} nivel={userLevel} requiredLevel='1'/>


          <PrivateRoute path="/produccion/datos/pausas" component={PausasProd} isAuth={isAuth} nivel={userLevel} requiredLevel='1'/>
          <PrivateRoute path="/produccion/datos/erp" component={Produccion} isAuth={isAuth} nivel={userLevel} requiredLevel='1'/>

          <PrivateRoute path="/produccion/reportar" component={Reportar} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/produccion/visualizar" component={Visualizar} isAuth={isAuth} nivel={userLevel} requiredLevel='1'/>

          <PrivateRoute path="/produccion/analisis/informes" component={Informes} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/produccion/analisis/causa-raiz" component={CausaRaiz} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/produccion/analisis/machine-learning" component={MachineLearning} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>

          <PrivateRoute path="/produccion/automatizar/limites" component={Limites} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/> {/*AQUI EMPIEZA LA PAGINA DE AUTOMATIZAR*/}
          <PrivateRoute path="/produccion/automatizar/flujos" component={Flujos} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>



          <PrivateRoute path="/produccion/config/usuarios" component={UsuariosConfigProd} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/produccion/config/datos-prod" component={CambiarDatosProd} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/produccion/config/niveles" component={NivelesConfigProd} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/produccion/config/uploading-reportes" component={UploadingReportesProd} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>

          <PrivateRoute path="/mantenimiento/parametros" component={Parametros} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/mantenimiento/monitorizacion" component={MonitorizacionMant} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/mantenimiento/reportar" component={ReportarMant} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>
          <PrivateRoute path="/mantenimiento/automatizar/limites" component={LimitesMant} isAuth={isAuth} nivel={userLevel} requiredLevel='5'/>



          {/*REDIRECCIONES*/}
          <Route path="/produccion/config" render={() => (
            <Redirect exact to="/produccion/config/usuarios" />)}/> {/*REDIRECCION A CONFIGURACION*/}
          <Route path="/produccion/analisis" render={() => (
            <Redirect exact to="/produccion/analisis/informes" />)}/> {/*REDIRECCION A ANALISIS*/}
          <Route path="/produccion/automatizar" render={() => (
            <Redirect exact to="/produccion/automatizar/limites" />)}/> {/*REDIRECCION A LIMITES*/}
          <Route path="/produccion" render={() => (
            <Redirect exact to="/produccion/datos/pausas" replace/>)}/> {/*REDIRECCION A PRODUCIÓN*/}


          <Route path="/mantenimiento/automatizar" render={() => (
            <Redirect exact to="/mantenimiento/automatizar/limites" />)}/> {/*REDIRECCION A LIMITES*/}
          <Route path="/mantenimiento" render={() => (
            <Redirect exact to="/mantenimiento/parametros" />)}/> {/*REDIRECCION A MANTENIMIENTO*/}
      <footer className="App-footer">
        <label className="footerText"></label>
      </footer>
    </body>

  );

}

export default App;
