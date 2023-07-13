// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
    return (
        <Router>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
        </Router>
    );
}

export default App;
