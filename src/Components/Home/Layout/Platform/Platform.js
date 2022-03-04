/* eslint-disable global-require */
import React from 'react';
import '../../CSS/Platform.css';

const Platform = () => (
  <div className="platform-main-container">
    <h1>
      A customizable ordering platform designed specifically for events and
      festivals
    </h1>
    <p>
      We work with event organizers and vendors or create a customized
      solution that incorporates all features and requirements for their
      event.
    </p>
    <img src={require('../../../../Assets/iphones-02.png')} alt="" />
    <div className="app-store-container">
      <img src={require('../../../../Assets/apps-store-medium.png')} alt="" />
    </div>
  </div>
);

export default Platform;
