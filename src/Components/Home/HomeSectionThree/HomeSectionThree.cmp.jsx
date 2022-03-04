import React from 'react';
import LineDotsImage from '../../../Assets/line-dots-bg-01-01.png';
import PreOrderMobileImage from '../../../Assets/preorder-pickup-mobile-01.png';
import './HomeSectionThree.cmp.css';

const HomeSectionThree = () => (
  <div className="homeSectionThreeContainer">
    <div className="homeSectionThreeBody">
      <div className="homeSectionThreeTextBody">
        <div className="sectionThreeHeading">
          <p>Pre-order, Pickup and Delivery Functionalities</p>
        </div>
        <div className="sectionThreeText">
          <p>
            Customizable per event, allowing vendors to accept pre-orders
            prior to the event starting. Also has the ability to set up any
            designated pickup locations depending upon the events requirements.
          </p>
        </div>
      </div>
      <div className="homeSectionThreeMobileImage">
        <img src={PreOrderMobileImage} alt="Mobile" />
      </div>
    </div>
    <div className="homeSectionThreeBackgroundImage">
      <img src={LineDotsImage} alt="Dots Background" />
    </div>

  </div>
);

export default HomeSectionThree;
