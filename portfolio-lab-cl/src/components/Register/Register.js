import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import decorationImage from '../../assets/Decoration.svg';
import closeCircle from '../../assets/close-circle-svgrepo-com.svg';


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
            <Link to="/">
    <img src={closeCircle} alt="closeCircle" className="close-circle" />
</Link>
<h2>Załóż konto</h2>
<img src={decorationImage} alt="Decoration" className="login-decoration" />
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
