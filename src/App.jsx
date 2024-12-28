import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
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
// import HealthCheck from './Pages/RegisterPage/Components/output/backend_call';


const App = () => {
  return (
    
    <Router>
    <Header/>
    <PhoneIcon/>
    <Analytics/>
    <SpeedInsights/>
    <WhatsAppFloatingButton/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/phone" element={<PhoneIcon />} />
        {/* <Route path="/health" element={<HealthCheck />} />   */}
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
