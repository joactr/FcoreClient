import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import '../navBarProd.css'
const NavBarSubprocesosMonit = ({stateChanger}) => {

  const [activeButton, setActiveButton] = useState("Lateral");

  const clickedButtonHandler = (name) => {
    setActiveButton(name);
    stateChanger(name);
  };

  const buttons = ["Global","Cuadradillo","Testero","Lateral","Fondo","Envasado"];

  return (
    <div class="wrapperNavSubprocesos">
        {buttons.map((name) => (
          <button
            id={name}
            className={activeButton === name ? `botonNavBarMonitorizacionActive` : "botonNavBarMonitorizacion"}
            onClick={() => clickedButtonHandler(name)}
          >
            {name}
          </button>
        ))}
    </div>
  );
}


export default NavBarSubprocesosMonit;
