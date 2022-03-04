/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

const AccordionContentItem = ({ png, title }) => (
  <div className="item-container">
    <img src={require(`../../../../Assets/${png}`)} alt="" />
    <span>{title}</span>
  </div>
);

export default AccordionContentItem;
