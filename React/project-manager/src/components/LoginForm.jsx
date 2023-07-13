import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === 'manager@travelers.com') {
            alert('Logged in as Manager');
        } else if (email === 'non-manager@travelers.com') {
            alert('Logged in as a Non-Manager');
        } else {
            alert('Invalid email');
        }
    };

    return (
        <div className="login-form">
            <h1 className="welcome-header">Welcome!</h1>
            <h2 className="login-header">Log in to Project Management App</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Email:
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label className="form-label">
                    Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default LoginForm;
