/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';

const SingleStep = ({ step }) => (
  <div className="step-container">
    <h2>
      STEP
      {step.stepNumber}
      :
    </h2>
    <p className="step-description">{step.stepDescription}</p>
    <img src={require(`../../../../Assets/${step.imageName}.png`)} alt="" />
  </div>
);

export default SingleStep;
