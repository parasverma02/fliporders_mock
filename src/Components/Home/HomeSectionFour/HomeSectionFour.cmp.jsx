import React from 'react';

import './HomeSectionFour.cmp.css';
import IphoneImage from '../../../Assets/iphone-01.png';

const HomeSectionFour = () => (
  <div className="homeSectionFourContainer">
    <div className="sectionFourMobileContainer">
      <img src={IphoneImage} alt="Iphone" />
    </div>
    <div className="sectionFourTextContainer">
      <div className="sectionFourHeading">
        <p>Innovation to improve the Festival Ordering Experience</p>
      </div>
      <div className="sectionFourText">
        <p>
          Customers no longer need to lineup or wait around, by ordering
          they can scan all the vendor menus, place orders and get notified
          when their orders are ready for pickup, giving them more time to
          enjoy the performances
        </p>
      </div>
    </div>
  </div>
);

export default HomeSectionFour;
