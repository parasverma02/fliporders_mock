import React from 'react';
import './HomeSectionOne.cmp.css';
import AppsStore from '../../../Assets/apps-store-small.png';
import BannerMainGraphic from '../../../Assets/banner-main-graphic.png';

const HomeSectionOne = () => (
  <div className="homeSectionOneContainer">
    <div className="sectionOneContent">
      <div className="sectionOneText">
        <p>
          A customizable ordering platform designed
          specifically for events & festivals.
        </p>
      </div>
      <div className="sectionOneSubtext">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="learnMoreButtonContainer">
        <button className="learnMoreButton" type="button">Learn More</button>
      </div>
      <div className="appsStoreContainer">
        <img className="appsStoreImg" src={AppsStore} alt="Apps Store Link" />
      </div>
    </div>
    <div className="sectionOneImageContainer">
      <img className="sectionOneImage" src={BannerMainGraphic} alt="Section One Main Graphic" />
    </div>
  </div>
);

export default HomeSectionOne;
