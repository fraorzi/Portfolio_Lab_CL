import React, { useState } from 'react';
import axios from 'axios';
import decorationImage from '../assets/Decoration.svg';
import facebookLogo from '../assets/Facebook.svg';
import instagramLogo from '../assets/Instagram.svg';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (!formData.name || formData.name.split(" ").length > 1) {
            isValid = false;
            errors.name = "Imię powinno być jednym wyrazem.";
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            isValid = false;
            errors.email = "Email powinien być poprawny.";
        }

        if (!formData.message || formData.message.length < 120) {
            isValid = false;
            errors.message = "Wiadomość musi mieć conajmniej 120 znaków.";
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.data.status === "success") {
                    setStatus("Wiadomość została pomyślnie wysłana!");
                    setFormData({ name: "", email: "", message: "" });
                }
            })
            .catch(error => {
                setStatus("Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie później.");
            });
        }
    }

    return (
        <div className="contact-section" id="contact-section">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Skontaktuj się z nami</h2>
                <img src={decorationImage} alt="Signature" className="contact-decoration" />
                <div className="form-group">
                    <label htmlFor="name">Wpisz swoje imię</label>
                    <input type="text" id="name" name="name" required onChange={handleChange} value={formData.name} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Wpisz swój email</label>
                    <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea id="message" name="message" required onChange={handleChange} value={formData.message}></textarea>
                </div>

                <button type="submit">Wyślij</button>

                <div className="form-errors">
                    {errors.name && <p>{errors.name}</p>}
                    {errors.email && <p>{errors.email}</p>}
                    {errors.message && <p>{errors.message}</p>}
                </div>
                {status && <p className="form-status">{status}</p>}
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
