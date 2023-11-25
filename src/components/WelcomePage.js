import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to the Festival</h1>
      <p>Experience the diversity of our cultural celebration!</p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default WelcomePage;
