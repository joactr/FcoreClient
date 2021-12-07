import React, {Fragment, useState} from 'react';
import { useForm } from "react-hook-form";
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import NavBarProdAna from './NavBarProdAna';
import './causaRaiz.css'

const CausaRaiz = () => {
    var valoresCargados = {
      test : "Cargando"
    };
    const {register, handleSubmit, setValue} = useForm({
      defaultValues: valoresCargados
    });

    const onEnterPress = (e) => {
      if(e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        window.alert(`Introducido el valor: ${e.target.value}`);

        //PUEDES HACER UN BUCLE CON UNA LISTA DE TODOS LOS CAMPOS E IR POPULANDOLOS
        var nombre = "col1-2"
        setValue(`${nombre}`, 'Funcionando binding'); // ✅ performant

      }
    }
    const onChange = (e) => {
        window.alert(`Se ha cambiado el título a ${e.target.value}`);
    }



    return (
        <Fragment>
          <NavBarProd/>
          <NavBarProdAna/>
          <SideNav/>
          <div>
            <div className="selector">
              <label className="textoSelect">Título del análisis</label>
              <select onChange={onChange} defaultValue={''} >
                <option selected disabled hidden></option>
                <option value="Titulo 1">Titulo 1</option>
                <option value="Titulo 2">Titulo 2</option>
                <option value="Titulo 3">Titulo 3</option>
              </select>
            </div>
          <div class="wrapperColumnasCausaRaiz">
            <div className="columna">
                <label className="tituloCausaRaiz">1W</label>
                <input type="text" onKeyDown={onEnterPress} />
                <input type="text" />
                <input type="text" {...register('col1-2', { required: true })}/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>

            <form className="columna">
              <label className="tituloCausaRaiz">2W</label>
              <input type="text" className="primero2W"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
            </form>

            <form className="columna">
              <label className="tituloCausaRaiz">3W</label>
              <input type="text" className="primero3W" onKeyDown={onEnterPress}/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
            </form>

            <form className="columna">
              <label className="tituloCausaRaiz">4W</label>
              <input type="text" className="primero4W" onKeyDown={onEnterPress}/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
            </form>

            <form className="columna">
              <label className="tituloCausaRaiz">5W</label>
              <input type="text" className="primero5W" onKeyDown={onEnterPress}/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
            </form>
            </div>
          </div>

        </Fragment>
    );
}





export default CausaRaiz;
