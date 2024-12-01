import React from 'react';
import {Box} from '@mui/material'
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
import coding from './Pages/services/coding.jsx'
import english from './Pages/services/english.jsx'
import env from './Pages/services/environment.jsx'
import { Margin } from '@mui/icons-material';


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
        <Route path="/phone" element={<PhoneIcon />} />
   
       
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/objective" element={<ProjectsSection />} />
        <Route path="/gallery" element={<CreativeGallery />} />
        <Route path="/services/coding" element={<coding/>} />
        <Route path="/services/english" element={<english />} />
        <Route path="/services/environment" element={<env />} />
      </Routes>
      <Box   sx = {{marginTop : "60px"}}>
        <Footer/>
      </Box>
    </Router>
  );
};

export default App;
