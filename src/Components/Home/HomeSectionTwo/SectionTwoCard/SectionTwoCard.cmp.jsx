import React from 'react';
import './SectionTwoCard.cmp.css';
import FastIcon from '../../../../Assets/fast-icon-01.png';

const SectionTwoCard = () => (
  <div className="cardContainer">
    <div className="cardImage">
      <img src={FastIcon} alt="Fast icon" />
    </div>
    <div className="cardHeading">
      <p>Pre-order, pickup and Delivery Functionalities</p>
    </div>
    <div className="cardBody">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
    </div>
  </div>
);

export default SectionTwoCard;
