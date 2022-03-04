/* eslint-disable global-require */
import React from 'react';
import '../../CSS/Footer.css';

const Footer = () => (
  <div className="footer-container">
    <p> &copy; 2022 Flip Orders Inc. All Rights Reserved.</p>
    <div className="social-links-container">
      <img src={require('../../../../Assets/fb-icon.png')} alt="" />
      <img src={require('../../../../Assets/twitter-icon.png')} alt="" />
      <img src={require('../../../../Assets/insta-icon.png')} alt="" />
      <img src={require('../../../../Assets/youtube-icon.png')} alt="" />
    </div>
  </div>
);

export default Footer;
