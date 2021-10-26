import React, {Fragment, useState} from 'react';
import SideNavAutomatizar from './SideNavAutomatizar';
import powAuto from './powAuto.jpg';
import './editarFlujos.css'

export default function EditarFlujos() {

  return (
  <Fragment>
    <img src={powAuto} className="powAuto" alt="Power Automate"/>
    <SideNavAutomatizar/>
  </Fragment>
  )
}
