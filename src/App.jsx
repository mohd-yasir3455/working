import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import About from '../src/Pages/LandingPage/Components/about'
import RulesPage from "./Pages/LandingPage/Components/RulesPage"
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/register" element={<RegisterPage />} />
 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
