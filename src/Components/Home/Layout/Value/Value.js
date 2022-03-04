import React from 'react';
import Accordion from './Accordion';
import '../../CSS/value.css';

const Value = () => {
  const accordionSections = [
    {
      title: 'For Customers',
      contentItems: [
        {
          png: 'for-customers-01.png',
          title: 'Spend Less time waiting',
        },
        {
          png: 'for-customers-03.png',
          title: 'Cashless and contactless payment',
        },
        {
          png: 'for-customers-02.png',
          title: 'View all vendors and options',
        },
        {
          png: 'for-customers-04.png',
          title: 'Order updates and notifications',
        },
      ],
    },
    {
      title: 'For Vendors',
      contentItems: [
        {
          png: 'for-customers-01.png',
          title: 'Spend Less time waiting',
        },
        {
          png: 'for-customers-03.png',
          title: 'Cashless and contactless payment',
        },
        {
          png: 'for-customers-02.png',
          title: 'View all vendors and options',
        },
        {
          png: 'for-customers-04.png',
          title: 'Order updates and notifications',
        },
      ],
    },
    {
      title: 'For Vendors & Events Organizers',
      contentItems: [
        {
          png: 'for-customers-01.png',
          title: 'Spend Less time waiting',
        },
        {
          png: 'for-customers-03.png',
          title: 'Cashless and contactless payment',
        },
        {
          png: 'for-customers-02.png',
          title: 'View all vendors and options',
        },
        {
          png: 'for-customers-04.png',
          title: 'Order updates and notifications',
        },
      ],
    },
  ];

  return (
    <div className="value-main-section">
      <h1>Providing Value For All Parties</h1>

      {accordionSections
        && accordionSections.length > 0
        && accordionSections.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.contentItems}
          />
        ))}
    </div>
  );
};

export default Value;
