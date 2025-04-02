import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import iitLogo from './assets/iitlogo.png';
// Logo should be imported properly in production code
// import iitLogo from './assets/logo.png';

function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="app-container">
      <div className="content">
        <div className="logo-container">
          {/* Use an actual image in production */}
          <img 
           src={iitLogo} 
            alt="IIT Bhilai Logo" 
            className="logo"
          />
        </div>
        
        <div className="institute-name">
          <h1>Indian Institute of Technology</h1>
          <h2>Bhilai</h2>
        </div>
        
        <button 
          className="login-button" 
          onClick={handleLogin}
        >
          Login
        </button>
        
        <p className="footer-text">
          © {new Date().getFullYear()} All rights reserved. IIT Bhilai. Created by Student Council.
        </p>
      </div>
    </div>
  );
}

export default App;