// App.js
import React from 'react';
import { Box, Button, Typography, Grid, Container, AppBar, Toolbar } from '@mui/material';
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>

<LandingPage/>
<RegisterPage/>

<Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
</div>
  );
};

export default App;