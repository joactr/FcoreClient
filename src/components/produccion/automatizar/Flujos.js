import React, {Fragment, useState, useEffect} from 'react';
import SideNav from '../../sideNav/SideNav';
import NavBarProd from '../NavBarProd';
import './flujos.css';
import  logo from './logoPowAuto.png'

declare var sdk: any;
declare var myMSALObj: any;
declare var applicationConfig: any;
export default function Flujos() {


  function signIn() {
      myMSALObj.loginPopup(applicationConfig.flowScopes).then(function (idToken) {
          //Login Success
          var loginbutton = document.getElementById('loginButton');
          loginbutton.innerHTML = myMSALObj.getUser().name;
          acquireTokenPopupAndLoadFlowsWidget();
      }, function (error) {
          console.log(error);
      });
  }
  function acquireTokenPopupAndLoadFlowsWidget() {
       //Call acquireTokenSilent (iframe) to obtain a token for Microsoft Flow
       myMSALObj.acquireTokenSilent(applicationConfig.flowScopes).then(function (accessToken) {
           console.log(accessToken);
           var widget = sdk.renderWidget('flows', {
               container: 'flowDiv',
               flowsSettings: {},
               templatesSettings: {},
               approvalCenterSettings: {},
               widgetStyleSettings: {}
             },error=> console.log(error));
           widget.listen("GET_ACCESS_TOKEN", function(requestParam, widgetDoneCallback) {
               widgetDoneCallback(null, {
               token:  accessToken
               });
           });
       }, function (error) {
           console.log(error);
           // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure due to consent or interaction required ONLY
           if (error.indexOf("consent_required") !== -1 || error.indexOf("interaction_required") !== -1 || error.indexOf("login_required") !== -1) {
               myMSALObj.acquireTokenPopup(applicationConfig.flowScopes).then(function (accessToken) {
                 console.log(accessToken);
               }, function (error) {
                   console.log(error);
               });
           }
       });
   }




  return (
  <Fragment>
    <NavBarProd/>
    <SideNav/>
    <script  type="text/javascript" src="https://flow.microsoft.com/Content/msflowsdk-1.1.js"></script>
    <div id="flowDiv" className="flowContainer"></div>
    <img src={logo} className="logoPowAuto"/>
    <button type="button" className="btn" id="loginButton" onClick={signIn}>Login</button>

  </Fragment>
  )
}
