import React from 'react';
import './HomeSectionTwo.cmp.css';
import SectionTwoCard from './SectionTwoCard/SectionTwoCard.cmp';

const HomeSectionTwo = () => {
  const data = [
    {
      imageName: 'fast-icon-01.png',
      heading: 'Pre-order, pickup and Delivery Functionalities',
      content:
        'Improve efficiency by allowing vendors to gain more exposure, accept more orders while providing convenience to attendees. Quicker service and mobile payments make the guest experience much more enjoyable',
    },
    {
      imageName: 'connecting-vendors-icon-01.png',
      heading: 'Connecting Vendors to Event Attendes',
      content:
      'By ordering through the app, event attendees can add items from multiple vendors into their basket and pay once, without having to wait in multiple lines',
    },
    {
      imageName: 'cashless-icon-01.png',
      heading: 'Cashless & Contactless Payment',
      content:
      'Customers are able to pay through the app via credit, debit, apple pay & google pay',
    },
  ];
  return (
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
        {data
        && data.map((item) => (
          <SectionTwoCard
            imageName={item.imageName}
            heading={item.heading}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSectionTwo;
