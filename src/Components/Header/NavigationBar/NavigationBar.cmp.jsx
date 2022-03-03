import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.cmp.css';

const NavigationBar = () => (
  <ul className="navigationItems">
    <li className="navigationItem">
      <Link to="/">Company</Link>
    </li>
    <li className="navigationItem">
      <Link to="/">Products</Link>
    </li>
    <li className="navigationItem">
      <Link to="/">Resources</Link>
    </li>
    <li className="navigationItem">
      <Link to="/">API</Link>
    </li>
    <li className="navigationItem">
      <Link to="/">Support</Link>
    </li>
  </ul>
);

export default NavigationBar;
