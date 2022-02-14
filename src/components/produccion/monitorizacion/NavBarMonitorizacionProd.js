import {NavLink} from 'react-router-dom';
import '../navBarProd.css'
const NavBarMonitorizacionProd = () => {

const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

return (
  <div class="wrapperNavTurnos">
    <NavLink to="/produccion/visualizar" activeStyle={style} className="linkProdsmall">Línea 1</NavLink>
    <NavLink to="/produccion/visualizar/2" activeStyle={style} className="linkProdsmall">Línea 2</NavLink>
    <NavLink to="/produccion/visualizar/3" activeStyle={style} className="linkProdsmall">Línea 3</NavLink>
    <NavLink to="/produccion/visualizar/4" activeStyle={style} className="linkProdsmall">Línea 4</NavLink>
    <NavLink to="/produccion/visualizar/5" activeStyle={style} className="linkProdsmall">Línea 5</NavLink>
    <NavLink to="/produccion/visualizar/6" activeStyle={style} className="linkProdsmall">Línea 6</NavLink>
    <NavLink to="/produccion/visualizar/7" activeStyle={style} className="linkProdsmall">Línea 7</NavLink>
    <NavLink to="/produccion/visualizar/8" activeStyle={style} className="linkProdsmall">Línea 8</NavLink>
    <NavLink to="/produccion/visualizar/9" activeStyle={style} className="linkProdsmall">Línea 9</NavLink>
    <button className="botonNavBarMonitorizacion" activeStyle={style}>Línea 10</button>
  </div>
)
}
export default NavBarMonitorizacionProd;
