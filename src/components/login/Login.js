import React, {Fragment, useState} from 'react';
import background from "./backgroundLogin.png";
import logo from "./logoLogin.png";
import logoGeneralitat from "./logoGeneralitat.png";
import logoUE from "./logoUE.png";
import logoIVACE from "./logoIVACE.png";
import './login.css'
import {Link, useHistory} from 'react-router-dom';
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


function Login({setAuth: setAuth, setNivel: setNivel}){
  const history = useHistory();
  const[loginState, setLoginState]=useState({username:'', password:''});

  const onChange = (e) => setLoginState({ ...loginState, [e.target.name]: e.target.value });

  const enviarDatos = (e) => {
    e.preventDefault();

    if(loginState.password !== '' && loginState.username !== ''){
        const pwd = bcrypt.hashSync(loginState.password, salt);
        const data = JSON.stringify({username: loginState.username, password: pwd});

        fetch(global.backend+"/login" ,
        {
          headers: {
           'Content-type': 'application/json; charset=UTF-8',
           'Access-Control-Allow-Origin': '*'
         },
             method: "POST",
             body: data

        }).then((response)=> {
          if(response.ok){
              response.json().then(json => {
                localStorage.setItem('jwt_token', json.token);
                localStorage.setItem('nivel', json.nivel);
                setNivel(json.nivel);
              });
              localStorage.setItem('user',loginState.username);
              localStorage.setItem('isLoggedIn', true);
              setAuth(true);
              history.push("/home");

          }else {window.alert(`Usuario o contraseña no son correctos`);}
        })
      }else{window.alert(`Introduzca usuario y contraseña`);}
    }

  return (
  <div className="loginContainer">

    <form className="loginForm">
      <label className="textoLogin">Usuario:</label>
      <input name="username" type="text" className="inputLogin" onChange={onChange}/>
      <label className="textoLogin">Contraseña:</label>
      <input name="password" type="password" className="inputLogin" onChange={onChange}/>
      <button className="buttonLogin" type="button" onClick={enviarDatos}>Entrar</button>
    </form>

    <img src={background} className="backgroundLogin" alt="backgroundLogin"/>
    <div className="divisor"><img src={logo} className="logoLogin" alt="logo"/>
    <label className="descripcion">Visualiza, Controla  y Automatiza cualquier Proceso de tu Fábrica</label></div>
    <footer className="footerLogin"></footer>
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
