import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import '../navBarProd.css'
const NavBarMonitorizacionProd = ({stateChanger}) => {

  const [activeButton, setActiveButton] = useState("Linea8");

  const clickedButtonHandler = (name) => {
    setActiveButton(name);
    stateChanger(name);
  };

  const buttons = ["Linea1", "Linea2", "Linea3", "Linea4", "Linea5", "Linea6", "Linea7", "Linea8", "Linea9", "Linea10"];

  return (
    <div class="wrapperNavTurnos">
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
  export default NavBarMonitorizacionProd;
