import React from 'react';
import decorationImage from '../assets/Decoration.svg';
import facebookLogo from '../assets/Facebook.svg';
import instagramLogo from '../assets/Instagram.svg';

function ContactSection() {
    return (
        <div className="contact-section" id="contact-section">
            <form className="contact-form">
                <h2>Skontaktuj się z nami</h2>
                <img src={decorationImage} alt="Signature" className="contact-decoration" />

                <div className="form-group">
                    <label htmlFor="name">Wpisz swoje imię</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Wpisz swój email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea id="message" name="message" required></textarea>
                </div>

                <button type="submit">Wyślij</button>
            </form>

            <div className="social-icons">
                <a href="your_facebook_link" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook Logo" />
                </a>
                <a href="your_instagram_link" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram Logo" />
                </a>
            </div>
        </div>
    );
}

export default ContactSection;
