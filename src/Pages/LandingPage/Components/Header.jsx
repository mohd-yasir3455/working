import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Box, Drawer, List, ListItem, Divider, Container } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import RegisterForm from '../../RegisterPage/RegisterPage';  // Importing the RegisterForm component

// Styled components for custom styles
const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#333', // Dark color for better visibility
  fontSize: '1.5rem',
}));

const HeaderButton = styled(Button)(({ theme }) => ({
  color: '#333', // Dark color for better visibility
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'transparent', // No background color on hover
    textDecoration: 'underline', // Underline effect on hover
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DrawerList = styled(List)(({ theme }) => ({
  width: 250,
  padding: 0,
  backgroundColor: theme.palette.background.paper,
  '& .MuiListItem-root': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false); // New state for controlling the Register form

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleRegisterForm = () => {
    setIsRegisterFormOpen(!isRegisterFormOpen); // Toggle the register form
  };

  const drawer = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <DrawerHeader>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerList>
        <ListItem button onClick={handleCloseNavMenu}>Home</ListItem>
        <ListItem button onClick={handleCloseNavMenu}>About</ListItem>
        <ListItem button onClick={handleOpenNavMenu}>Services</ListItem>
        <Menu
          id="services-menu"
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          <MenuItem onClick={handleCloseNavMenu}>Service 1</MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>Service 2</MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>Service 3</MenuItem>
        </Menu>
        <ListItem button onClick={handleCloseNavMenu}>Contact</ListItem>
      </DrawerList>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#ffffff', // White background for the header
        boxShadow: 'none',
        padding: '0 16px',
        borderBottom: '1px solid #ddd',
        '@media (max-width:600px)': {
          padding: '0 8px',
        },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo variant="h6">
              Logo
            </Logo>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <HeaderButton onClick={handleCloseNavMenu}>Home</HeaderButton>
            <HeaderButton onClick={handleCloseNavMenu}>About</HeaderButton>
            <HeaderButton
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              Services
            </HeaderButton>
            <Menu
              id="services-menu"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>Service 1</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Service 2</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Service 3</MenuItem>
            </Menu>
            <HeaderButton onClick={handleCloseNavMenu}>Contact</HeaderButton>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls="drawer-menu"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              sx={{ color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={toggleRegisterForm} // Opens the register form
          >
            Register
          </Button>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: '#ffffff', borderRight: '1px solid #ddd' } }}
      >
        {drawer}
      </Drawer>

      {/* Render RegisterForm component if isRegisterFormOpen is true */}
      {isRegisterFormOpen && <RegisterForm />}
    </AppBar>
  );
};

export default Header;
