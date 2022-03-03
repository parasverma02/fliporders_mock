import React from 'react';
import './Home.cmp.css';
import Header from '../Header/Header.cmp';
import HomeSectionOne from './HomeSectionOne/HomeSectionOne.cmp';

const Home = () => (
  <div className="homeContainer">
    <Header />
    <HomeSectionOne />
  </div>
);

export default Home;
