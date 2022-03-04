import React from 'react';
import SingleStep from './SingleStep';
import '../../CSS/steps.css';

const Step = () => {
  const steps = [
    {
      stepNumber: 1,
      stepDescription:
        'Once the user scans the QR code at an event or clicks on the FlipOrders link received prior to the event. They can choose which restaurants to order from.',
      imageName: 'iphone-02',
    },
    {
      stepNumber: 2,
      stepDescription:
        'They can add items from multiple vendors into their basket into one single order.',
      imageName: 'iphone-03',
    },
    {
      stepNumber: 3,
      stepDescription:
        'They can then select their location and if they are ordering for now or for later.',
      imageName: 'iphone-04',
    },
    {
      stepNumber: 4,
      stepDescription:
        'They can select their payment method and complete their order. They then will receive confirmation and a text notification when their orders are ready for pickup.',
      imageName: 'iphone-05',
    },
  ];
  return (
    <div className="steps-section-container">
      <h2>
        Customers use our online
        {' '}
        <br />
        {' '}
        ordering platform in 4 simple steps:
      </h2>
      <div className="steps-container">
        {steps
          && steps.length > 0
          && steps.map((step) => <SingleStep step={step} />)}
      </div>
    </div>
  );
};

export default Step;
