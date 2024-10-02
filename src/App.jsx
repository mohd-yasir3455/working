import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import About from '../src/Pages/LandingPage/Components/about'
import RulesPage from "./Pages/LandingPage/Components/RulesPage"
import ProjectsSection from './Pages/LandingPage/Components/ProjectSection';
import CreativeGallery from './Pages/LandingPage/Components/CreativeGallery';
import FAQSection from './Pages/LandingPage/Components/FAQSection';
import Header from './Pages/LandingPage/Components/Header';
import Footer from './Pages/LandingPage/Components/lastfooter';
import PhoneIcon from './Pages/LandingPage/Components/PhoneIcon'
import WhatsAppFloatingButton from './Pages/LandingPage/Components/WhatsAppFloatingButton';
const App = () => {
  return (
    
    <Router>
    <Header/>
    <PhoneIcon/>
    <WhatsAppFloatingButton/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/objective" element={<ProjectsSection />} />
        <Route path="/gallery" element={<CreativeGallery />} />
      </Routes>
    <Footer/>
    </Router>
  );
};

export default App;
