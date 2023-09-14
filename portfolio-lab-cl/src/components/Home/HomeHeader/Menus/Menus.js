import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Menus() {
    return (
        <div>
            <div className="top-menu">
                <Link to="/logowanie" className="login">Zaloguj</Link>
                <Link to="/rejestracja" className="register">Załóż konto</Link>
            </div>
            <div className="bottom-menu">
                <ScrollLink to="start" spy={true} smooth={true} duration={500}>Start</ScrollLink>
                <ScrollLink to="simpleSteps" spy={true} smooth={true} duration={500}>O co chodzi?</ScrollLink>
                <ScrollLink to="aboutUs" spy={true} smooth={true} duration={500}>O nas</ScrollLink>
                <ScrollLink to="whoWeHelp" spy={true} smooth={true} duration={500}>Fundacja i organizacje</ScrollLink>
                <ScrollLink to="contact" spy={true} smooth={true} duration={500}>Kontakt</ScrollLink>
            </div>
        </div>
    );
}

export default Menus;
