// src/components/ContactSection.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", color: "#333", padding: "50px 0", textAlign: "center" }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Email: info@ngoname.org | Phone: +123-456-7890
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactSection;