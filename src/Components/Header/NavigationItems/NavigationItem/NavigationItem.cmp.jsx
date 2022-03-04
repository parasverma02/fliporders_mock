import React from 'react';
import { NavLink } from 'react-router-dom';
//
import './NavigationItem.cmp.css';

const NavigationItem = ({ name }) => (
  <li className="navigationItem">
    <NavLink to="/">{name}</NavLink>
  </li>
);

export default NavigationItem;
