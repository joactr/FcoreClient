import React, {Fragment, useState} from 'react';
import background from "./backgroundLogin.png";
import logo from "./logoLogin.png";
import logoGeneralitat from "./logoGeneralitat.png";
import logoUE from "./logoUE.png";
import logoIVACE from "./logoIVACE.png";
import './login.css'
import {Link} from 'react-router-dom';
function Login(){


  return (
  <div className="loginContainer">

    <form className="loginForm">
      <label className="textoLogin">Usuario:</label>
      <input type="text" className="inputLogin"/>
      <label className="textoLogin">Contraseña:</label>
      <input type="password" className="inputLogin"/>
      <Link to="/home" className="buttonLogin">Entrar</Link>
    </form>

    <img src={background} className="backgroundLogin" alt="backgroundLogin"/>
    <div className="divisor"><img src={logo} className="logoLogin" alt="logo"/>
    <label className="descripcion">Visualiza, Controla  y Automatiza cualquier Proceso de tu Fábrica</label></div>
    <footer className="footerLogin">Copyright © 2021 Enira Engineering</footer>
    <footer className="footerBlanco">
      <div className="divText"><label className="footerBlancoText" >Proyecto innovador</label></div>
      <img src={logoIVACE} className="logoIVACE" alt="logoIVACE" resizeMode="contain"/>
      <img src={logoGeneralitat} className="logoGeneralitat" alt="logoGeneralitat" resizeMode="contain"/>
      <img src={logoUE} className="logoUE" alt="logoUE" resizeMode="contain"/>
    </footer>

  </div>
  )

}

export default Login;
