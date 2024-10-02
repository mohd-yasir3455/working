import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, IconButton, Box, Drawer, List, ListItem, Container, Divider } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom'; // For navigation

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  // Define routes
  const routes = {
    Home: '/',
    'About Us': '/about',
    Rules: '/rules',
    Contact: '/contact',
    Objective: '/objective', // New Objective route
    Gallery: '/gallery', // Added Gallery route
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#fff', borderBottom: '1px solid #ddd', padding: { xs: '0 8px', md: '0 16px' } }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <img src="/logo.png" alt="BEES Foundation" style={{ height: 40 }} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {['Home', 'About Us', 'Rules', 'Contact', 'Objective', 'Gallery'].map((text) => ( // Added 'Gallery'
              <Button
                key={text}
                component={Link} // Use Link component for navigation
                to={routes[text]} // Set the 'to' attribute based on the routes map
                sx={{
                  color: '#333',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                {text}
              </Button>
            ))}
            <Button onClick={handleMenuClick} sx={{ color: '#333', fontWeight: 'bold' }}>
              Services
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
              <MenuItem onClick={handleCloseMenu}>Service 1</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Service 2</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Service 3</MenuItem>
            </Menu>
          </Box>

          {/* Register and Login Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginRight: '8px' }}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button variant="contained" color="primary" onClick={() => navigate('/register')}>
              Register
            </Button>
          </Box>

          {/* Mobile Menu (Hamburger) */}
          <IconButton onClick={toggleDrawer(true)} sx={{ display: { xs: 'flex', md: 'none' }, color: '#333' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Drawer for Mobile View */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
            onClick={toggleDrawer(false)}
          >
            {/* Close Icon */}
            <IconButton sx={{ justifyContent: 'flex-end', padding: 2 }}>
              <CloseIcon />
            </IconButton>

            {/* Drawer List */}
            <List sx={{ textAlign: 'center' }}>
              {['Home', 'About Us', 'Rules', 'Contact', 'Objective', 'Gallery'].map((text) => ( // Added 'Gallery'
                <ListItem button key={text} component={Link} to={routes[text]}>
                  {text}
                </ListItem>
              ))}

              {/* Services Menu in Drawer */}
              <ListItem button onClick={handleMenuClick}>
                Services
              </ListItem>
              <Divider />

              {/* Login and Register Buttons */}
              <ListItem sx={{ paddingTop: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate('/login')}
                  sx={{ width: '100%' }}
                >
                  Login
                </Button>
              </ListItem>
              <ListItem sx={{ paddingBottom: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/register')}
                  sx={{ width: '100%' }}
                >
                  Register
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Header;
