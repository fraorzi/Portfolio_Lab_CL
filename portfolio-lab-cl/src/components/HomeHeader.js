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
                    <Link to="/" className="header-button">Start</Link>
                    <Link to="/" className="header-button">O co chodzi?</Link>
                    <Link to="/" className="header-button">O nas</Link>
                    <Link to="/" className="header-button">Fundacja i organizacje</Link>
                    <Link to="/" className="header-button">Kontakt</Link>
                </div>
        </div>
    );
}

export default HomeHeader;
