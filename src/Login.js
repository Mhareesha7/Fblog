// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log('Username:', username);
    console.log('Password:', password);
    // Example: You can send a request to your backend for authentication
  };

  const handleCreateAccount = () => {
    // Handle create account action here, for example, redirect to a signup page
    console.log('Create new account clicked');
  };

  return (
    <div className="login-container">
      
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email address or phone number"
    required
  />
          
          
        </div>
        <div className="form-group">
          
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </div>
        <button type="submit">Login</button>
        <p className="forgot-password">Forgot password..?</p>
         <hr></hr>
        <button type="button" className="create-account-btn" onClick={handleCreateAccount}>Create New Account</button>

      </form>
    </div>
  );
};

export default Login;
