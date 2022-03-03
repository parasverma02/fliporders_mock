import React from 'react';
import './Home.cmp.css';
import Header from '../Header/Header.cmp';
import HomeSectionOne from './HomeSectionOne/HomeSectionOne.cmp';
import HomeSectionTwo from './HomeSectionTwo/HomeSectionTwo.cmp';

const Home = () => (
  <div className="homeContainer">
    <Header />
    <HomeSectionOne />
    <HomeSectionTwo />
  </div>
);

export default Home;
