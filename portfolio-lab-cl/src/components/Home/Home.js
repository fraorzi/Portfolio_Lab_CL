import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import StepsSection from '../StepsSection';
import AboutUs from "../AboutUs";
import WhoWeHelp from "../WhoWeHelp";
import Contact from "../Contact";


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

