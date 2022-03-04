/* eslint-disable no-unused-vars */
import React from 'react';
import { responsiveComponent } from '@blast-engine/responsive-component';
//
import './Header.cmp.css';
import NavigationItems from './NavigationItems/NavigationItems.cmp';
import MainLogo from '../../Assets/logo-main.png';

const Header = responsiveComponent(
  ({ isMobile, sizeClass }) => (
    <div className="headerContainer">
      {/* <div>
        {isMobile ? 'mobile' : 'not mobile'}
        {' '}
        {sizeClass}
      </div> */}
      <div className="mainLogoContainer">
        <img src={MainLogo} alt="Main logo" />
      </div>
      <div className="navigationContainer">
        <NavigationItems />
      </div>
      <div className="headerButtonContainer">
        <button className="headerButton" type="button">Watch Demo</button>
      </div>
    </div>
  ),
);

export default Header;
