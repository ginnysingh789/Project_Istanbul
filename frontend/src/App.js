import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage'; // Import SignUpPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add SignUpPage route */}
      </Routes>
    </Router>
  );
}

export default App;
