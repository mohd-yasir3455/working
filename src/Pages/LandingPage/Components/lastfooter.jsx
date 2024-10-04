// src/components/Footer.jsx
import React from "react";
import { Box, Container, Grid, Link, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import logo from './images/logo.jpg';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2", // Footer background color
        color: "#fff",
        py: 4, // Increased padding for a more spacious layout
        mt: 4,
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for a cleaner look
        borderTop: '3px solid #1565c0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}> 
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2 }}>
              <img src={logo} alt="BEES Foundation" style={{ width: '80%', maxWidth: 250 }} /> 
              {/* Logo is centered on small screens */}
            </Box>
            <Typography variant="body2" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            BEES Foundation is working in the area of education since last 7 years in which it provides free education to underprivileged children. Along with this, the foundation is also working on environment and evils of society like levish wedding. The objective of BEES Foundation is to reform and promote education. BEES Foundation has recently taken a new initiative in which it will help the families of members of the Foundation by giving them a good amount of money in case of their untimely death. And in case of a serious accident the member will also be helped.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              Quick Links
            </Typography>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Link href="/" color="inherit" underline="hover" variant="body2" display="block">
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover" variant="body2" display="block">
                About
              </Link>
              <Link href="/services" color="inherit" underline="hover" variant="body2" display="block">
                Services
              </Link>
              <Link href="/contact" color="inherit" underline="hover" variant="body2" display="block">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              Resources
            </Typography>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Link href="/blog" color="inherit" underline="hover" variant="body2" display="block">
                Blog
              </Link>
              <Link href="/faq" color="inherit" underline="hover" variant="body2" display="block">
                FAQ
              </Link>
              <Link
                href="https://www.facebook.com/BharatEducationalEquitySect"
                color="inherit"
                underline="hover"
                variant="body2"
                display="block"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Facebook sx={{ marginRight: 1 }} /> Facebook Page
                </Box>
              </Link>
              <Link href="/terms" color="inherit" underline="hover" variant="body2" display="block">
                Terms of Service
              </Link>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/share/zPtM7D2i7XmAxB9T/?mibextid=qi2Omg"
                sx={{ color: "#fff" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.twitter.com"
                sx={{ color: "#fff" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com"
                sx={{ color: "#fff" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com"
                sx={{ color: "#fff" }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} BEES Foundation. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
