// LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Authentication failed');
            }
            return response.json();
        })
        .then(user => {
            if (user.role === 'manager') {
                alert('Logged in as Manager');
            } else {
                alert('Logged in as a Non-Manager');
            }
        })
        .catch(error => {
            setMessage(error.message);
        });
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Login" />
            </form>
            {message && <p>{message}</p>}
            <Link to="/register">Register</Link>
        </div>
    );
}

export default LoginForm;
