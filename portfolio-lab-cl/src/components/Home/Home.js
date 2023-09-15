import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns';
import StepsSection from '../StepsSection/StepsSection';
import AboutUs from "../AboutUs/AboutUs";
import WhoWeHelp from "../WhoWeHelp/WhoWeHelp";
import Contact from "../Contact/Contact";


function MainPage() {
    return (
        <div id="home-section">
            <HomeHeader />
            <HomeThreeColumns />
            <StepsSection />
            <AboutUs />
            <WhoWeHelp />
            <Contact />
        </div>
    );
}

export default MainPage;

