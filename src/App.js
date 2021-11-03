import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Reportar from "./components/produccion/Reportar";
import Visualizar from "./components/produccion/Visualizar";
import Informes from "./components/produccion/Informes";
import Produccion from "./components/produccion/Produccion";
import ConfiguracionProduccion from "./components/produccion/Configuracion";
import Limites from "./components/produccion/automatizar/Limites";
import Flujos from "./components/produccion/automatizar/Flujos";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Parametros from "./components/mantenimiento/Parametros";

function App() {
  return (
    <div className="App">
      <body className="App-body">

        <BrowserRouter>
          <Redirect exact from="/" to="/login" />
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>

            <Route path="/produccion/parametros-produccion" component={Produccion}/>
            <Route path="/produccion/reportar" component={Reportar}/>
            <Route path="/produccion/visualizar" component={Visualizar}/>
            <Route path="/produccion/informes" component={Informes}/>
              <Route path="/produccion/automatizar/limites" component={Limites}/> {/*AQUI EMPIEZA LA PAGINA DE AUTOMATIZAR*/}
              <Route path="/produccion/automatizar/flujos" component={Flujos}/>
            <Route path="/produccion/config">
              <div className="divProduccion">
                <ConfiguracionProduccion/>
              </div>
            </Route>

            <Route path="/mantenimiento/parametros" component={Parametros}/>


          </Switch>
        </BrowserRouter>

        <footer className="App-footer">
          <label className="footerText">Copyright © 2021 Enira Engineering</label>
        </footer>
      </body>



    </div>

  );
}

export default App;
