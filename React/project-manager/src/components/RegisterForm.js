// RegisterForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            alert('Registration successful');
            history.push('/login');
        })
        .catch(error => {
            alert(error.message);
        });
    };

    return (
        <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default RegisterForm;
