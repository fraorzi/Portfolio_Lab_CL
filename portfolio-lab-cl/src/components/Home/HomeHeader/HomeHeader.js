import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import homeHeroImage from '../../../assets/Home-Hero-Image.jpg';
import decorationImage from '../../../assets/Decoration.svg';
import Menus from "./Menus/Menus";

function HomeHeader() {
    return (
        <div className="home-header">
            <img src={homeHeroImage} alt="Home Hero" className="home-hero-img" />

            <div className="home-header-content">
                <Menus />
                <h1>Zacznij pomagać!</h1>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decorationImage} alt="Decoration" className="header-decoration" />
                <div className="header-buttons">
                    <div className="main-buttons">
                        <RouterLink to="/login" className="main-button">Oddaj <br /> rzeczy</RouterLink>
                        <RouterLink to="/login" className="main-button">Zorganizuj <br /> zbiórkę</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
