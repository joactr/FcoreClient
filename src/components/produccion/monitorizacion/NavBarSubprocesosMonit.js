import {NavLink} from 'react-router-dom';
import '../navBarProd.css'
const NavBarSubprocesosMonit = () => {

const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

return (
  <div class="wrapperNavSubprocesos">
    <NavLink to="/produccion/visualizar" activeStyle={style} className="linkProdsmall">Global</NavLink>
    <NavLink to="/produccion/visualizar/a" activeStyle={style} className="linkProdsmall">Cuadradillo</NavLink>
    <NavLink to="/produccion/visualizar/b" activeStyle={style} className="linkProdsmall">Testero</NavLink>
    <NavLink to="/produccion/visualizar/c" activeStyle={style} className="linkProdsmall">Lateral</NavLink>
    <NavLink to="/produccion/visualizar/d" activeStyle={style} className="linkProdsmall">Fondo</NavLink>
    <NavLink to="/produccion/visualizar/e" activeStyle={style} className="linkProdsmall">Envasado</NavLink>
  </div>
)
}
export default NavBarSubprocesosMonit;
