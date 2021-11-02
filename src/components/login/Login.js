import React, {Fragment, useState} from 'react';
import background from "./backgroundLogin.png";
import logo from "./logoLogin.png";
import './login.css'
import {Link} from 'react-router-dom';
function Login(){


  return (
  <Fragment>
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
  </Fragment>
  )

}

export default Login;
