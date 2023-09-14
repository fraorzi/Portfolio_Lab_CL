import React from 'react';
import PeopleImg from '../../assets/People.jpg';
import SignatureImg from '../../assets/Signature.svg';
import DecorationImg from '../../assets/Decoration.svg';

function AboutUs() {
    return (
        <div id="about-us-section" className="about-us-section">
            <div className="about-us-content">
                <h2>O nas</h2>
                <img src={DecorationImg} alt="Decoration" className="decoration" />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={SignatureImg} alt="Signature" className="signature" />
            </div>
            <img src={PeopleImg} alt="People" className="people-img" />
        </div>
    );
}

export default AboutUs;
