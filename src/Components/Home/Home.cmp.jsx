import React from 'react';

import './Home.cmp.css';
import Header from '../Header/Header.cmp';
import HomeSectionOne from './HomeSectionOne/HomeSectionOne.cmp';
import HomeSectionTwo from './HomeSectionTwo/HomeSectionTwo.cmp';
import HomeSectionThree from './HomeSectionThree/HomeSectionThree.cmp';
import HomeSectionFour from './HomeSectionFour/HomeSectionFour.cmp';
import Platform from './Layout/Platform/Platform';
import Value from './Layout/Value/Value';
import Step from './Layout/Steps/Step';
import QuickLink from './Layout/QuickLInks/QuickLink';
import Footer from './Layout/Footer/Footer';

const Home = () => (
  <div className="homeContainer">
    <Header />
    <HomeSectionOne />
    <HomeSectionTwo />
    <HomeSectionThree />
    <HomeSectionFour />
    <Platform />
    <Value />
    <Step />
    <QuickLink />
    <Footer />
  </div>
);

export default Home;
