import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import StepsSection from './StepsSection';
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";


function MainPage() {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <StepsSection />
            <AboutUs />
            <WhoWeHelp />
        </div>
    );
}

export default MainPage;

