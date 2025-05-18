import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import iitLogo from '../assets/iitlogo.png';
// import buildingsSilhouette from '../assets/buildings-silhouette.png';
import { IoChevronBackOutline, IoChevronDownOutline } from 'react-icons/io5';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/upcomingclasses');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Login attempt:', { role, username, password });
  };

  const selectRole = (selectedRole) => {
    setRole(selectedRole);
    setIsDropdownOpen(false);
  };

  return (
    <div className="login-page">
      <div className="login-top">
        <button className="back-button" onClick={handleBack}>
          <IoChevronBackOutline />
        </button>
        
        <div className="login-logo-container">
          <img src={iitLogo} alt="IIT Bhilai Logo" className="login-logo" />
          <h1 className="login-title">Login</h1>
        </div>
      </div>

      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Role</label>
            <div className="dropdown">
              <div 
                className="dropdown-header" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{role || 'Select role'}</span>
                <IoChevronDownOutline className="dropdown-icon" />
              </div>
              
              {isDropdownOpen && (
                <div className="dropdown-options">
                  <div className="dropdown-option" onClick={() => selectRole('Student')}>
                    Student
                  </div>
                  <div className="dropdown-option" onClick={() => selectRole('Professor')}>
                    Professor
                  </div>
                  <div className="dropdown-option" onClick={() => selectRole('TA')}>
                    TA
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>LDAP Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>

      {/* <div className="buildings-container">
        <img src={buildingsSilhouette} alt="Buildings Silhouette" className="buildings-image" />
      </div> */}
    </div>
  );
}

export default Login;