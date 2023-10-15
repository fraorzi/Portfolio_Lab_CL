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
        <div className="register-section">
            <Link to="/">
    <img src={closeCircle} alt="closeCircle" className="close-circle" />
</Link>
<h2>Załóż konto</h2>
<img src={decorationImage} alt="Decoration" className="register-decoration" />
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="register-input-group">
                    <div className="input-container">
                        <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="input-container">
                        <label>Hasło:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="input-container">
                        <label>Powtórz hasło:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                </div>
                <button type="submit" className="register-btn">Zarejestruj</button>
            </form>
        </div>
    );
}

export default Register;
