// src/components/Footer.jsx
import React from "react";
import { Box, Container, Grid, Link, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2", // Footer background color
        color: "#fff",
        py: 3,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              This website is created to provide services to underprivileged communities and support environmental improvement initiatives.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
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
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
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
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Facebook sx={{ marginRight: 1 }} /> Facebook Page
              </Box>
            </Link>
            <Link href="/terms" color="inherit" underline="hover" variant="body2" display="block">
              Terms of Service
            </Link>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex">
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
