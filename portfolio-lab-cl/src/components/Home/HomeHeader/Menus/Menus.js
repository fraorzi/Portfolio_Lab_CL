import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


function Menus() {
    return (
        <div>
            <div className="top-menu">
                <Link to="/login" className="login">Zaloguj</Link>
                <Link to="/register" className="register">Załóż konto</Link>
            </div>
            <div className="bottom-menu">
                <ScrollLink to="home-section" spy={true} smooth={true} duration={500}>Start</ScrollLink>
                <ScrollLink to="about-section" spy={true} smooth={true} duration={500}>O co chodzi?</ScrollLink>
                <ScrollLink to="about-us-section" spy={true} smooth={true} duration={500}>O nas</ScrollLink>
                <ScrollLink to="who-we-help-section" spy={true} smooth={true} duration={500}>Fundacja i organizacje</ScrollLink>
                <ScrollLink to="contact-section" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink>
            </div>
        </div>
    );
}

export default Menus;
