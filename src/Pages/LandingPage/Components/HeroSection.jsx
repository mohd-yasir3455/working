// src/components/HeroSection.jsx
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#00aaff",
        color: "#fff",
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          Make a Difference Today
        </Typography>
        <Typography variant="h5" paragraph>
          Join us in making the world a better place for those in need.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Donate Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;