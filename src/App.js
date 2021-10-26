import logo from "./logo.png";
import background from "./background.png";
import "./App.css";
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import Reportar from "./components/reportar/Reportar";
import Reporte from "./components/reporte/Reporte";
import Produccion from "./components/produccion/Produccion";
import Configuracion from "./components/configuracion/Configuracion";
import Automatizar from "./components/automatizar/Automatizar";
import Limites from "./components/automatizar/Limites";
import Flujos from "./components/automatizar/Flujos";
import EditarFlujos from "./components/automatizar/EditarFlujos";
import ConfigAutomatizar from "./components/automatizar/ConfigAutomatizar";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
    <img src={background} className="Fondo" alt="background"/>
      <body className="App-body">

        <BrowserRouter>
          <Redirect exact from="/" to="login" />
          <Switch>
            <Route path="/login"> {/*AQUI EMPIEZA LA PAGINA DE LOGIN*/}
                <Login/>
            </Route>
            <Route path="/produccion"> {/*AQUI EMPIEZA LA PAGINA DE PRODUCCION*/}
              <Produccion/>
            </Route>
            <Route path="/reportar"> {/*AQUI EMPIEZA LA PAGINA DE REPORTAR*/}
                <Reportar/>
            </Route>
            <Route path="/visualizar"> {/*AQUI EMPIEZA LA PAGINA DE VISUALIZAR*/}
              <Reporte/>
            </Route>
            <Route path="/config"> {/*AQUI EMPIEZA LA PAGINA DE CONFIGURACION*/}
              <div className="divProduccion">
                <Configuracion/>
              </div>
            </Route>
            <Route path="/automatizar"> {/*AQUI EMPIEZA LA PAGINA DE AUTOMATIZAR*/}
                <Automatizar/>
            </Route>
            <Route path="/limites"> {/*AQUI EMPIEZA LA PAGINA DE LIMITES*/}
                <Limites/>
            </Route>
            <Route path="/flujos"> {/*AQUI EMPIEZA LA PAGINA DE MIS FLUJOS*/}
              <Flujos/>
            </Route>
            <Route path="/editar-flujos"> {/*AQUI EMPIEZA LA PAGINA DE EDITAR FLUJOS*/}
                <EditarFlujos/>
            </Route>
            <Route path="/config-automatizar"> {/*AQUI EMPIEZA LA PAGINA DE EDITAR FLUJOS*/}
                <ConfigAutomatizar/>
            </Route>
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
