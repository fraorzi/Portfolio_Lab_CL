import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import homeHeroImage from '../assets/Home-Hero-Image.jpg';
import decorationImage from '../assets/Decoration.svg';

function HomeHeader() {
    return (
        <div className="home-header">
            <img src={homeHeroImage} alt="Home Hero" className="home-hero-img" />

            <div className="header-content">
                <nav>
                    <ul>
                        <li>
                            <RouterLink to="/login">Zaloguj się</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/register">Zarejestruj się</RouterLink>
                        </li>
                    </ul>
                </nav>

                <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decorationImage} alt="Decoration" className="header-decoration" />

                <div className="header-buttons">
                    <div className="main-buttons">
                        <RouterLink to="/login" className="main-button">Oddaj rzeczy</RouterLink>
                        <RouterLink to="/login" className="main-button">Zorganizuj zbiórkę</RouterLink>
                    </div>

                    <ScrollLink to="start-section" smooth={true} spy={true} duration={500} className="header-button">Start</ScrollLink>
                    <ScrollLink to="about-section" smooth={true} spy={true} duration={500} className="header-button">O co chodzi?</ScrollLink>
                    <ScrollLink to="about-us-section" smooth={true} spy={true} duration={500} className="header-button">O nas</ScrollLink>
                    <ScrollLink to="who-we-help-section" smooth={true} spy={true} duration={500} className="header-button">Fundacja i organizacje</ScrollLink>
                    <ScrollLink to="contact-section" smooth={true} spy={true} duration={500} className="header-button">Kontakt</ScrollLink>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
