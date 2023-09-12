import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeader() {
    return (
        <div className="home-header">
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Zaloguj się</Link>
                    </li>
                    <li>
                        <Link to="/register">Zarejestruj się</Link>
                    </li>
                </ul>
            </nav>
            <div className="header-buttons">

                <div className="main-buttons">
                    <Link to="/login" className="main-button">Oddaj rzeczy</Link>
                    <Link to="/login" className="main-button">Zorganizuj zbiórkę</Link>
                </div>

                <Link to="start-section" smooth={true} className="header-button">Start</Link>
                <Link to="about-section" smooth={true} className="header-button">O co chodzi?</Link>
                <Link to="about-us-section" smooth={true} className="header-button">O nas</Link>
                <Link to="foundation-section" smooth={true} className="header-button">Fundacja i organizacje</Link>
                <Link to="contact-section" smooth={true} className="header-button">Kontakt</Link>
            </div>
        </div>
    );
}

export default HomeHeader;
