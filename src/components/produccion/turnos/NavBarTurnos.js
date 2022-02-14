import {NavLink} from 'react-router-dom';
import '../navBarProd.css'
const NavBarTurnos = () => {

const style = {fontWeight: 'bold', borderBottom: '7px solid #0070C0'}

return (
  <div class="wrapperNavTurnos">
  <NavLink to="/produccion/turnos/1" activeStyle={style} className="linkProdsmall">Línea 1</NavLink>
  <NavLink to="/produccion/turnos/2" activeStyle={style} className="linkProdsmall">Línea 2</NavLink>
  <NavLink to="/produccion/turnos/3" activeStyle={style} className="linkProdsmall">Línea 3</NavLink>
  <NavLink to="/produccion/turnos/4" activeStyle={style} className="linkProdsmall">Línea 4</NavLink>
  <NavLink to="/produccion/turnos/5" activeStyle={style} className="linkProdsmall">Línea 5</NavLink>
  <NavLink to="/produccion/turnos/6" activeStyle={style} className="linkProdsmall">Línea 6</NavLink>
  <NavLink to="/produccion/turnos/7" activeStyle={style} className="linkProdsmall">Línea 7</NavLink>
  <NavLink to="/produccion/turnos/8" activeStyle={style} className="linkProdsmall">Línea 8</NavLink>
  <NavLink to="/produccion/turnos/9" activeStyle={style} className="linkProdsmall">Línea 9</NavLink>
  <button className="botonNavBarMonitorizacion" activeStyle={style}>Línea 10</button>
  </div>
)

}

export default NavBarTurnos;
