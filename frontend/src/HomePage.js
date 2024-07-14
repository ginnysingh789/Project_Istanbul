import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const words = ['Rahul', 'Saqib'];

  useEffect(() => {
    let currentWordIndex = 0;
    let currentTextIndex = 0;
    const interval = setInterval(() => {
      if (currentTextIndex <= words[currentWordIndex].length) {
        setDisplayText(words[currentWordIndex].slice(0, currentTextIndex));
        currentTextIndex++;
      } else {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentTextIndex = 1;
        setDisplayText(words[currentWordIndex].slice(0, currentTextIndex));
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="left-half">
        <header className="header">
          <h1>Project Istanbul</h1>
        </header>
        <main className="main-content">
          <h2>Sanchita loves {displayText}<br /></h2>
        </main>
      </div>
      <div className="right-half">
        <main className="right-content">
          <h2>Get started</h2>
          <Link to="/login" className="login-link">Log in</Link>
          <Link to="/signup" className="signup-link">Sign up</Link> {/* Correct signup link */}
        </main>
        <footer className="footer">
          <div className="footer-links">
            <a href="#">Terms of use</a>
            <a href="#">Privacy policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
