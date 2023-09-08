import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeader() {
    return (
        <div className="home-header">
            <h1>Twoja strona główna</h1>
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
        </div>
    );
}

export default HomeHeader;
