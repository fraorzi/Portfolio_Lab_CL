import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import decorationImage from '../../assets/Decoration.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-section">
            <h2>Zaloguj się</h2>
            <img src={decorationImage} alt="Decoration" className="login-decoration" />
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-input-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="login-input-group">
                    <label>Hasło:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="login-buttons">
                    <Link to="/rejestracja" className="create-account-btn">Załóż konto</Link>
                    <button type="submit" className="login-btn">Zaloguj</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
