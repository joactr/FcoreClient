import React, {Fragment} from 'react';
import SideNav from "./sideNav/SideNav";
import logo from '../logo.png'

const Home = () => {
  return (
      <Fragment>
        <SideNav/>
        <a href="http://www.enira.es" target="_blank" rel="noreferrer">
          <img src={logo} className="homeLogo" alt="logo"/>
        </a>
      </Fragment>
  );
}

export default Home;
