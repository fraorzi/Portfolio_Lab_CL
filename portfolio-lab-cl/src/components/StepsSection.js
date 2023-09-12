import React from 'react';
import { Link } from 'react-router-dom';
import Icon1 from '../assets/Icon-1.svg';
import Icon2 from '../assets/Icon-2.svg';
import Icon3 from '../assets/Icon-3.svg';
import Icon4 from '../assets/Icon-4.svg';

function StepsSection() {
    return (
        <div id="about-section" className="steps-section">
            <h2>Wystarczą 4 proste kroki</h2>

            <div className="steps-container">
                <div className="step">
                    <img src={Icon1} alt="Step 1"/>
                    <h3>1</h3>
                    <p>Wybierz rzeczy</p>
                </div>

                <div className="step">
                    <img src={Icon2} alt="Step 2"/>
                    <h3>2</h3>
                    <p>Spakuj je w worki</p>
                </div>

                <div className="step">
                    <img src={Icon3} alt="Step 3"/>
                    <h3>3</h3>
                    <p>Wybierz fundację</p>
                </div>

                <div className="step">
                    <img src={Icon4} alt="Step 4"/>
                    <h3>4</h3>
                    <p>Zamów kuriera</p>
                </div>
            </div>

            <Link to="/login" className="give-things-btn">Oddaj rzeczy</Link>
        </div>
    );
}

export default StepsSection;
