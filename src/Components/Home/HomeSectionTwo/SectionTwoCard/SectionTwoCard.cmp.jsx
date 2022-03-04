/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import './SectionTwoCard.cmp.css';

const SectionTwoCard = ({ imageName, heading, content }) => (
  <div className="cardContainer">
    <div className="cardImage">
      <img src={require(`../../../../Assets/${imageName}`)} alt="icon" />
    </div>
    <div className="cardHeading">
      <p>{heading}</p>
    </div>
    <div className="cardBody">
      <p>
        {content}
      </p>
    </div>
  </div>
);

export default SectionTwoCard;
