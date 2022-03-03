import React from 'react';
import './HomeSectionTwo.cmp.css';
import SectionTwoCard from './SectionTwoCard/SectionTwoCard.cmp';

const HomeSectionTwo = () => (
  <div className="homeSectionTwoContainer">
    <div className="sectionTwoText">
      <p>Save Time & Increase Revenue</p>
    </div>
    <div className="sectionTwoSubtext">
      <p>
        Customers can save time by beign able to order and
        pay through the app from any location, whether it
        be at the event or at home!
      </p>
    </div>
    <div className="sectionTwoBody">
      <SectionTwoCard />
      <SectionTwoCard />
      <SectionTwoCard />
    </div>
  </div>
);

export default HomeSectionTwo;
