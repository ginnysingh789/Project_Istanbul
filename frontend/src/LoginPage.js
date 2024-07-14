import React from 'react';
import './LoginPage.css'; // Create LoginPage.css for styling if needed

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>
      <div className="signup-link">
        Don't have an account? <a href="#">Sign up</a>
      </div>
      <button type='submit' className='login-button'> Log in as Contributor</button>
    </div>
  );
}

export default LoginPage;
