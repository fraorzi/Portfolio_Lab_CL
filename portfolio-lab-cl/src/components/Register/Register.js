import React, { useState } from 'react';

function Register() {
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
            <h2>Załóż konto</h2>
            <form className="login-form" onSubmit={handleSubmit}>                <div className="login-section">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="login-section">
                    <label>Hasło:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>

                <div className="login-input-group">
                    <label>Powtórz hasło:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" className="login-btn">Zarejestruj</button>
            </form>
        </div>
    );
}

export default Register;
