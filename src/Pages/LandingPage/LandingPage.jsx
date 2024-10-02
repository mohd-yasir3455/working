// src/pages/LandingPage.jsx
import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ContactSection from './Components/ContactSection';
import ProjectSection from './Components/ProjectSection';
import AboutSection from './Components/AboutSection';
import Footer from './Components/Footer';
import Crousal from './Components/Crousal'
import FounderCard from './Components/FounderCard';
import WhatsAppFloatingButton from './Components/WhatsAppFloatingButton';
import PhoneIcon from './Components/PhoneIcon'
import VideoComponent from './Components/VideoComponent';

import CardDeck from './Components/CardDeck';


const LandingPage = () => {
  return (
    <>
      <Header />
      <Crousal/>
      <FounderCard/>
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <WhatsAppFloatingButton/>
      <PhoneIcon/>
      <VideoComponent/>
      <CardDeck/>
      <Footer />
    </>
  );
};

export default LandingPage;
