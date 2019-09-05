import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const loginLinks = () => (
        <nav className='login'>
            <Link to='/login'> Log In</Link>
            <Link to='/signup'> Sign Up</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className='greeting-div'>
            <h2 className='greeting-header'> Hello, {currentUser.username} </h2>
            <button className='logout-button' onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : loginLinks();
};

export default Greeting;