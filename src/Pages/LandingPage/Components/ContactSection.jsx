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

        <Typography variant="body1" sx={{ margin: "10px 0", fontWeight: 500 }}>
          Address: 853/4, Amba Vihar, Muzaffarnagar, U.P, India
        </Typography>

        <Typography variant="body1" sx={{ margin: "10px 0" }}>
          Email: <a href="mailto:beesfeedback@gmail.com" style={{ color: "#333", textDecoration: "none" }}>beesfeedback@gmail.com</a>
        </Typography>

        <Typography variant="body1" sx={{ margin: "10px 0" }}>
          Contact Us: 70-3735-8787
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactSection;
