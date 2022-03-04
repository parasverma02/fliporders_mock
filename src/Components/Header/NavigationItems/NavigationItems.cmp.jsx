import React from 'react';
import './NavigationItems.cmp.css';
import NavigationItem from './NavigationItem/NavigationItem.cmp';

const NavigationItems = () => (
  <ul className="navigationItems">
    <NavigationItem name="Company" />
    <NavigationItem name="Products" />
    <NavigationItem name="Resources" />
    <NavigationItem name="API" />
    <NavigationItem name="Support" />
  </ul>
);

export default NavigationItems;
