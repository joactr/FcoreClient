import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute({isAuth, component:Component,nivel, requiredLevel, ...rest }) {

    return <Route {...rest} render={(props)=> {
      if(isAuth){ //Comprueba login
        if(nivel < requiredLevel){ //Comprueba permisos
          return <Redirect to={{pathname:"/home"}}/>
        }else{
          return <Component/>
        }
      }else{
        return <Redirect to={{pathname:"/login"}}/>
      }
    }} />;

}
