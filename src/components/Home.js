import React, {Fragment} from 'react';
import SideNav from "./sideNav/SideNav";
import logo from '../logo.png'

const Home = () => {
  return (
      <Fragment>
        <SideNav/>

        <img src={logo} className="homeLogo" alt="logo"/>

      </Fragment>
  );
}
export default Home;
