// src/pages/LandingPage.jsx
import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ContactSection from './Components/ContactSection';
import ProjectSection from './Components/ProjectSection';
import AboutSection from './Components/AboutSection';
import Footer from './Components/Footer';
import Crousal from './Components/Crousal'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Crousal/>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default LandingPage;
