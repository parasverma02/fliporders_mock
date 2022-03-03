import React from 'react';
import './Header.cmp.css';
import NavigationBar from './NavigationBar/NavigationBar.cmp';
import MainLogo from '../../Assets/logo-main.png';

const Header = () => (
  <div className="headerContainer">
    <div className="mainLogoContainer">
      <img src={MainLogo} alt="Main logo" />
    </div>
    <div className="navigationContainer">
      <NavigationBar />
    </div>
    <div className="headerButtonContainer">
      <button className="headerButton" type="button">Watch Demo</button>
    </div>
  </div>
);

export default Header;
