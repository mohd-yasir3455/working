import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import About from '../src/Pages/LandingPage/Components/about'
import RulesPage from "./Pages/LandingPage/Components/RulesPage"
import ProjectsSection from './Pages/LandingPage/Components/ProjectSection';
import CreativeGallery from './Pages/LandingPage/Components/CreativeGallery';
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/register" element={<RegisterPage />} />
 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/objective" element={<ProjectsSection />} />
        <Route path="/gallery" element={<CreativeGallery />} />
      </Routes>
    </Router>
  );
};

export default App;
