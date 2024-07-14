import React from 'react';
import './SignUpPage.css'; // Create SignUpPage.css for styling

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
    
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="signup-button">Sign up</button>
      </form>
      <div className="login-link">
        Already have an account? <a href="/login">Log in</a>
      </div>
      <button type="submit" className="signup-button">Sign up as Contributor</button>
    </div>
  );
}

export default SignUpPage;
