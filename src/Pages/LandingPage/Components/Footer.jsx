// src/components/Footer.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "#fff", padding: "20px 0", textAlign: "center" }}>
      <Container>
        <Typography variant="body2">
          &copy; 2024 NGO Name. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;









