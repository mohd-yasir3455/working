import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Typography, Box } from "@mui/material";

const AboutSection = () => {
  const theme = useTheme(); // Access the theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Apply theme's breakpoint

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        color: "#333",
        padding: isSmallScreen ? "30px 0" : "50px 0",
        textAlign: isSmallScreen ? "center" : "left",
      }}
    >
      <Container>
        <Typography variant={isSmallScreen ? "h5" : "h4"} gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          We are a non-profit organization dedicated to helping communities in need through various programs
          and initiatives. Our mission is to create sustainable change and improve the lives of those we serve.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
